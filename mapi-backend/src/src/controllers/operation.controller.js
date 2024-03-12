const { response, request } = require("express");
const CustomError = require("../config/errors");
const TeamModel = require("../database/models/team.model");
const TechnicianModel = require("../database/models/technician.model");
const MaintenanceTypeModel = require("../database/models/maintenance-type.model");
const ComponentModel = require("../database/models/component.model");
const ModelModel = require("../database/models/model.model");
const OperationModel = require("../database/models/operation.model");
const OperationModelModel = require("../database/models/operation-model");
const SystemModel = require("../database/models/system.model");

class OperationController {
  static limit = 10;

  static #handleError = (error, res = response) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ status: false, data: null, error: error.message });
    }
    console.error(error);
    return res
      .status(500)
      .json({ status: false, data: null, error: "Internal Server Error" });
  };

  static getAllData = async (_, res = response) => {
    try {
      let operations = await OperationModel.findAll();
      if (operations.length) {
        for (let operation of operations) {
          const type = operation.operation_component.charAt(0);
          const id = operation.operation_component.substring(2);
          if (type === "C") {
            const result = await ComponentModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          } else {
            const result = await SystemModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          }
          const models = await OperationModelModel.findByIdOperation(
            operation.id_operation
          );

          let allOperations_modelCode = "";
          models.forEach((model) => {
            if (model.model_code) {
              allOperations_modelCode += model.model_code;
              allOperations_modelCode += ", ";
            }
          });

          operation.operation_models = allOperations_modelCode;

          delete operation.operation_team;
          delete operation.operation_component;
          delete operation.operation_measure;
          delete operation.operation_technician;
          delete operation.operation_maintenance_type;
        }
      }

      return res.status(200).json({
        status: true,
        data: { operations },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getAll = async (req = request, res = response) => {
    try {
      const orderBy = req.query?.orderBy || "ASC";
      const page = parseInt(req.query?.page) || 1;
      const offset = (page - 1) * this.limit;
      let operations = await OperationModel.findByPage(
        this.limit,
        offset,
        orderBy
      );
      const { total } = await OperationModel.getTotalOperations();
      const totalPages = Math.ceil(total / this.limit);
      if (operations.length) {
        for (let operation of operations) {
          const type = operation.operation_component.charAt(0);
          const id = operation.operation_component.substring(2);
          if (type === "C") {
            const result = await ComponentModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          } else {
            const result = await SystemModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          }
          const models = await OperationModelModel.findByIdOperation(
            operation.id_operation
          );
          operation.operation_models = models;
        }
      }

      return res.status(200).json({
        status: true,
        data: { totalPages, page, operations },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getFilters = async (req = request, res = response) => {
    try {
      const { id_model, id_component } = req.query;
      const page = parseInt(req.query?.page) || 1;
      const offset = (page - 1) * this.limit;
      let operations = await OperationModelModel.findByPage(
        id_model,
        id_component,
        this.limit,
        offset
      );
      const { total } = await OperationModelModel.getTotalOperations(
        id_model,
        id_component,
        this.limit,
        offset
      );
      const totalPages = Math.ceil(total / this.limit);
      if (operations.length) {
        for (let operation of operations) {
          const type = operation.operation_component.charAt(0);
          const id = operation.operation_component.substring(2);
          if (type === "C") {
            const result = await ComponentModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          } else {
            const result = await SystemModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          }
          const models = await OperationModelModel.findByIdOperation(
            operation.id_operation
          );
          operation.operation_models = models;
        }
      }
      return res.status(200).json({
        status: true,
        data: { totalPages, page, operations },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getModalData = async (_, res = response) => {
    try {
      const teams = await TeamModel.findAll();
      const technicians = await TechnicianModel.findAllTechnicians();
      const maintenances = await MaintenanceTypeModel.findAll();
      return res.status(200).json({
        status: true,
        data: { teams, technicians, maintenances },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getComponents = async (req = request, res = response) => {
    try {
      const { id_team } = req.params;
      let components = await ComponentModel.findByTeam(id_team);
      if (components.length) {
        components = components.map(
          ({
            id_component,
            component_name,
            component_code,
            id_system,
            system_code,
            system_name,
          }) => {
            if (!id_system)
              return {
                type_component: "C",
                id_component,
                component_name,
                component_code,
              };
            return {
              type_component: "S",
              id_component: id_system,
              component_code: system_code,
              component_name: system_name,
            };
          }
        );
      }
      return res.status(200).json({
        status: true,
        data: components,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getModel = async (req = request, res = response) => {
    try {
      const { id_team, model_code } = req.query;
      let components = [];
      if (id_team && model_code) {
        components = await ModelModel.findByTeam(id_team, model_code);
      }
      return res.status(200).json({
        status: true,
        data: components,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static filterOperations = async (req = request, res = response) => {
    try {
      const { id_team, model_code } = req.query;
      let components = [];
      if (id_team && model_code) {
        components = await ModelModel.findByTeam(id_team, model_code);
      }
      return res.status(200).json({
        status: true,
        data: components,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static saveOperation = async (req = request, res = response) => {
    try {
      const data = req.body;
      const team = TeamModel.findById(data.operation_team);
      if (!team) throw CustomError.badRequest("El equipo no existe");
      const technician = TechnicianModel.findById(data.operation_technician);
      if (!technician) throw CustomError.badRequest("El técnico no existe");
      const { operation_models } = data;
      if (!data.id_operation) {
        const id_operation = await OperationModel.create(data);
        data.id_operation = id_operation;
      } else {
        await OperationModel.update(data);
        await OperationModelModel.deleteById(data.id_operation);
      }

      if (operation_models.length) {
        for (const operation of operation_models) {
          const id_operation_model = await OperationModelModel.create(
            data.id_operation,
            operation.id_model
          );
          operation.id_operation_model = id_operation_model;
        }
      }

      return res.status(200).json({
        status: true,
        data,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static searchOperation = async (req = request, res = response) => {
    try {
      const { code, page } = req.body;
      const operations = await OperationModel.searchByCode(code, page);
      const operations_count = await OperationModel.countSearchByCode(code);
      const pages = Math.ceil(operations_count.length / 10);
      if (operations.length) {
        for (let operation of operations) {
          const type = operation.operation_component.charAt(0);
          const id = operation.operation_component.substring(2);
          if (type === "C") {
            const result = await ComponentModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          } else {
            const result = await SystemModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          }
          const models = await OperationModelModel.findByIdOperation(
            operation.id_operation
          );
          operation.operation_models = models;
        }
      }

      if (!operations)
        throw CustomError.badRequest(
          "No existe ninguna operación con ese código"
        );

      return res.status(200).json({
        status: true,
        data: {
          page,
          totalPages: pages,
          operations,
        },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static searchByCode = async (req = request, res = response) => {
    try {
      const { code, id_team } = req.query;
      const operations = await OperationModelModel.findByCode(code, id_team);
      if (operations.length) {
        for (let operation of operations) {
          const type = operation.operation_component.charAt(0);
          const id = operation.operation_component.substring(2);
          if (type === "C") {
            const result = await ComponentModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          } else {
            const result = await SystemModel.getInfoForOperation(id);
            if (result) {
              operation.system = result.system;
              operation.code = result.code + operation.id_operation;
            } else {
              operation.system = null;
              operation.code = null;
            }
          }
          const models = await OperationModelModel.findByIdOperation(
            operation.id_operation
          );
          operation.operation_models = models;
        }
      }
      return res.status(200).json({
        status: true,
        data: operations,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static deleteOperation = async (req = request, res = response) => {
    try {
      const { id_operation } = req.params;
      const operation = await OperationModel.findById(id_operation);
      if (!operation)
        throw CustomError.badRequest("La operación a eliminar no existe");
      await OperationModel.deleteById(id_operation);
      return res.status(200).json({
        status: true,
        data: null,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };
}

module.exports = OperationController;

import Joi from 'joi';
import { Template } from '../types/template.types';

export class ValidationUtils {
  /**
   * Validate project name
   */
  static validateProjectName(name: string): Joi.ValidationResult {
    const schema = Joi.string()
      .min(1)
      .max(50)
      .pattern(/^[a-zA-Z][a-zA-Z0-9-_]*$/)
      .required()
      .messages({
        'string.pattern.base':
          'Project name must start with a letter and contain only letters, numbers, hyphens, and underscores',
        'string.min': 'Project name must be at least 1 character long',
        'string.max': 'Project name must be no more than 50 characters long',
      });

    return schema.validate(name);
  }

  /**
   * Validate framework choice
   */
  static validateFramework(framework: string): Joi.ValidationResult {
    const schema = Joi.string()
      .valid('react', 'nextjs', 'express')
      .required()
      .messages({
        'any.only': 'Framework must be one of: react, nextjs, express',
      });

    return schema.validate(framework);
  }

  /**
   * Validate structure choice based on framework
   */
  static validateStructure(
    structure: string,
    framework: string,
  ): Joi.ValidationResult {
    let validStructures: string[] = [];

    switch (framework) {
      case 'react':
        validStructures = ['feature-based', 'component-based'];
        break;
      case 'nextjs':
        validStructures = ['app-router', 'pages-router'];
        break;
      case 'express':
        validStructures = ['layered', 'mvc'];
        break;
    }

    const schema = Joi.string()
      .valid(...validStructures)
      .required()
      .messages({
        'any.only': `Structure must be one of: ${validStructures.join(', ')}`,
      });

    return schema.validate(structure);
  }

  /**
   * Validate template definition
   */
  static validateTemplateDefinition(template: Template): Joi.ValidationResult {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      framework: Joi.string().valid('react', 'nextjs', 'express').required(),
      structure: Joi.string().required(),
      dependencies: Joi.array().items(Joi.string()).default([]),
      devDependencies: Joi.array().items(Joi.string()).default([]),
      files: Joi.array()
        .items(
          Joi.object({
            path: Joi.string().required(),
            content: Joi.string().required(),
            template: Joi.boolean().default(false),
          }),
        )
        .default([]),
    });

    return schema.validate(template);
  }

  /**
   * Validate file path
   */
  static validateFilePath(filePath: string): Joi.ValidationResult {
    const schema = Joi.string()
      .pattern(/^[^<>:*?"|]*$/)
      .messages({
        'string.pattern.base': 'File path contains invalid characters',
      });

    return schema.validate(filePath);
  }

  /**
   * General validation helper
   */
  static validate(
    data: unknown,
    schema: Joi.ObjectSchema,
  ): Joi.ValidationResult {
    return schema.validate(data);
  }

  /**
   * Check if validation passed
   */
  static isValid(result: Joi.ValidationResult): boolean {
    return !result.error;
  }

  /**
   * Get error message from validation result
   */
  static getErrorMessage(result: Joi.ValidationResult): string {
    return result.error?.details[0]?.message || 'Validation failed';
  }
}

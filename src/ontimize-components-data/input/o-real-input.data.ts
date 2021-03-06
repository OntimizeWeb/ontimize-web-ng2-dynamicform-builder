import { DEFAULT_INPUTS_O_REAL_INPUT } from 'ontimize-web-ngx';

import { OIntegerInputData } from './o-integer-input.data';

export class ORealInputData extends OIntegerInputData {

  constructor() {
    super();
  }

  public getDirective(): string {
    return 'o-real-input';
  }

  public getInputsProperties(): string[] {
    return DEFAULT_INPUTS_O_REAL_INPUT;
  }

  public getTemplateInputsData(): any {
    const templateInputsData = super.getTemplateInputsData();
    templateInputsData['min-decimal-digits'] = {
      type: 'number',
      label: 'min-length',
      tooltip: '',
      default: 2,
      required: true
    };
    templateInputsData['max-decimal-digits'] = {
      type: 'number',
      label: 'max-length',
      tooltip: '',
      default: 2,
      required: true
    };
    templateInputsData['decimal-separator'] = {
      type: 'string',
      label: 'decimal-separator',
      tooltip: '',
      default: null,
      required: false
    };
    templateInputsData['decimal-digits'] = {
      type: 'number',
      label: 'decimal-digits',
      tooltip: '',
      default: 2,
      required: false
    };
    return templateInputsData;
  }

}

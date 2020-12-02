import { InputMetadata } from '../types/inputs-metadata.type';

export class OComponentData {

  public configuredInputs: any = {};
  public children: OComponentData[];
  protected overridedDirective: string;

  constructor(arg: any) {
    Object.assign(this, arg);
    if (this.isContainer()) {
      this.children = [];
    }
    // TODO we need to find a better way to create a random string
    const randomId = Math.random().toString(36).substring(9);
    this.configuredInputs.attr = `${this.getDirective()}-${randomId}`;
  }

  public getDirective(): string {
    return '';
  }

  public getInputsProperties(): string[] {
    return [];
  }

  public getInputs(): string[] {
    const rawProperties = this.getInputsProperties();
    const parsedProperties = [];
    rawProperties.forEach(properties => {
      const splitted = properties.split(':');
      parsedProperties.push(splitted[splitted.length - 1].trim());
    });
    return parsedProperties;
  }

  public getBasicInputs(): string[] {
    return ['attr'];
  }

  public getInputsMetadata(): InputMetadata[] {
    return [{
      input: 'attr',
      type: 'string',
      label: 'attr',
      tooltip: 'Unique component identifier (TEST: translate)',
      default: null,
      required: true
    }];
  }

  public isContainer(): boolean {
    return false;
  }

  public setConfiguredInputs(data: any): void {
    this.configuredInputs = Object.assign(this.configuredInputs, data);
  }

  public getComponentAttr(): string {
    return this.configuredInputs ? this.configuredInputs.attr : undefined;
  }

  public getConfiguredInputs(): any {
    return this.configuredInputs;
  }

  public getConfiguredInputValue(inputName: string): any {
    return this.configuredInputs ? this.configuredInputs[inputName] : undefined;
  }

  public addChild(child: OComponentData, index?: number): void {
    if (index == null) {
      this.children.push(child);
    } else {
      this.children.splice(index, 0, child);
    }
  }

  public getChildren(): OComponentData[] { //ArrayList<OComponentData> {
    return this.children;
  }

  public getOverridedDirective(): string {
    return this.overridedDirective;
  }

  public changeSelector(selector?: string) {
    this.overridedDirective = selector;
  }

  getAvailableSelectorsToChange(): string[] {
    return null;
  }
}

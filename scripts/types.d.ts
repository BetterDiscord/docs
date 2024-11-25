export interface ReturnValue {
    type: string;
    description: string;
}

export interface Parameter {
    name: string;
    description: string;
    type: string;
    optional: boolean;
    value: string;
}

export interface Method {
    name: string;
    description: string;
    deprecated: boolean;
    returns?: ReturnValue;
    parameters?: Parameter[];
}

export interface Property {
    name: string;
    description: string;
    type: string;
    deprecated: boolean;
}
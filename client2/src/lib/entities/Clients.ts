import Client, { IClient } from './Client';
import ClientAuto, { IClientAuto } from './ClientAuto';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IClients {
    auto_clients?: IClientAuto[];
    clients?: IClient[];
}

export default class Clients {
    readonly _auto_clients: ClientAuto[] | undefined;

    get autoClients(): ClientAuto[] | undefined {
        return this._auto_clients;
    }

    readonly _clients: Client[] | undefined;

    get clients(): Client[] | undefined {
        return this._clients;
    }

    constructor(props: IClients) {
        if (props.auto_clients) {
            this._auto_clients = props.auto_clients.map((p) => new ClientAuto(p));
        }
        if (props.clients) {
            this._clients = props.clients.map((p) => new Client(p));
        }
    }

    serialize(): IClients {
        const data: IClients = {
        };
        if (typeof this._auto_clients !== 'undefined') {
            data.auto_clients = this._auto_clients.map((p) => p.serialize());
        }
        if (typeof this._clients !== 'undefined') {
            data.clients = this._clients.map((p) => p.serialize());
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            clients: !this._clients ? true : this._clients.reduce((result, p) => result && p.validate().length === 0, true),
            auto_clients: !this._auto_clients ? true : this._auto_clients.reduce((result, p) => result && p.validate().length === 0, true),
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IClients>): Clients {
        return new Clients({ ...this.serialize(), ...props });
    }
}

import { service } from 'agentstack'

@service()
export class Hello {
  world() {
    return 'Hello world';
  }
}

import { service } from '@e2/core'

@service()
export class Hello {
  world() {
    return 'Hello world';
  }
}

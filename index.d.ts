declare module "events" {
  interface EventEmitter {
    promisify(event: string): any;
  }
}
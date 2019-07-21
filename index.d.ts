declare interface EventEmitter<T> {
  promisify(event: string): any;
}
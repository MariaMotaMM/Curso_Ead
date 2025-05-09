
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alunoturma
 * 
 */
export type alunoturma = $Result.DefaultSelection<Prisma.$alunoturmaPayload>
/**
 * Model apostila
 * 
 */
export type apostila = $Result.DefaultSelection<Prisma.$apostilaPayload>
/**
 * Model avaliacao
 * 
 */
export type avaliacao = $Result.DefaultSelection<Prisma.$avaliacaoPayload>
/**
 * Model curso
 * 
 */
export type curso = $Result.DefaultSelection<Prisma.$cursoPayload>
/**
 * Model formapagamento
 * 
 */
export type formapagamento = $Result.DefaultSelection<Prisma.$formapagamentoPayload>
/**
 * Model modulo
 * 
 */
export type modulo = $Result.DefaultSelection<Prisma.$moduloPayload>
/**
 * Model parceria
 * 
 */
export type parceria = $Result.DefaultSelection<Prisma.$parceriaPayload>
/**
 * Model plano
 * 
 */
export type plano = $Result.DefaultSelection<Prisma.$planoPayload>
/**
 * Model progressoapostila
 * 
 */
export type progressoapostila = $Result.DefaultSelection<Prisma.$progressoapostilaPayload>
/**
 * Model progressoavaliacao
 * 
 */
export type progressoavaliacao = $Result.DefaultSelection<Prisma.$progressoavaliacaoPayload>
/**
 * Model progressovideo
 * 
 */
export type progressovideo = $Result.DefaultSelection<Prisma.$progressovideoPayload>
/**
 * Model turma
 * 
 */
export type turma = $Result.DefaultSelection<Prisma.$turmaPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model video
 * 
 */
export type video = $Result.DefaultSelection<Prisma.$videoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const formapagamento_tipo: {
  CartaoCredito: 'CartaoCredito',
  Boleto: 'Boleto',
  Pix: 'Pix'
};

export type formapagamento_tipo = (typeof formapagamento_tipo)[keyof typeof formapagamento_tipo]


export const usuario_tipo: {
  aluno: 'aluno',
  professor: 'professor',
  admin: 'admin'
};

export type usuario_tipo = (typeof usuario_tipo)[keyof typeof usuario_tipo]

}

export type formapagamento_tipo = $Enums.formapagamento_tipo

export const formapagamento_tipo: typeof $Enums.formapagamento_tipo

export type usuario_tipo = $Enums.usuario_tipo

export const usuario_tipo: typeof $Enums.usuario_tipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunoturmas
 * const alunoturmas = await prisma.alunoturma.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alunoturmas
   * const alunoturmas = await prisma.alunoturma.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alunoturma`: Exposes CRUD operations for the **alunoturma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunoturmas
    * const alunoturmas = await prisma.alunoturma.findMany()
    * ```
    */
  get alunoturma(): Prisma.alunoturmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apostila`: Exposes CRUD operations for the **apostila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apostilas
    * const apostilas = await prisma.apostila.findMany()
    * ```
    */
  get apostila(): Prisma.apostilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.avaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.cursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formapagamento`: Exposes CRUD operations for the **formapagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formapagamentos
    * const formapagamentos = await prisma.formapagamento.findMany()
    * ```
    */
  get formapagamento(): Prisma.formapagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.moduloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parceria`: Exposes CRUD operations for the **parceria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcerias
    * const parcerias = await prisma.parceria.findMany()
    * ```
    */
  get parceria(): Prisma.parceriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plano`: Exposes CRUD operations for the **plano** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planos
    * const planos = await prisma.plano.findMany()
    * ```
    */
  get plano(): Prisma.planoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoapostila`: Exposes CRUD operations for the **progressoapostila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progressoapostilas
    * const progressoapostilas = await prisma.progressoapostila.findMany()
    * ```
    */
  get progressoapostila(): Prisma.progressoapostilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoavaliacao`: Exposes CRUD operations for the **progressoavaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progressoavaliacaos
    * const progressoavaliacaos = await prisma.progressoavaliacao.findMany()
    * ```
    */
  get progressoavaliacao(): Prisma.progressoavaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressovideo`: Exposes CRUD operations for the **progressovideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progressovideos
    * const progressovideos = await prisma.progressovideo.findMany()
    * ```
    */
  get progressovideo(): Prisma.progressovideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.turmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.videoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    alunoturma: 'alunoturma',
    apostila: 'apostila',
    avaliacao: 'avaliacao',
    curso: 'curso',
    formapagamento: 'formapagamento',
    modulo: 'modulo',
    parceria: 'parceria',
    plano: 'plano',
    progressoapostila: 'progressoapostila',
    progressoavaliacao: 'progressoavaliacao',
    progressovideo: 'progressovideo',
    turma: 'turma',
    usuario: 'usuario',
    video: 'video'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alunoturma" | "apostila" | "avaliacao" | "curso" | "formapagamento" | "modulo" | "parceria" | "plano" | "progressoapostila" | "progressoavaliacao" | "progressovideo" | "turma" | "usuario" | "video"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alunoturma: {
        payload: Prisma.$alunoturmaPayload<ExtArgs>
        fields: Prisma.alunoturmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alunoturmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alunoturmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          findFirst: {
            args: Prisma.alunoturmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alunoturmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          findMany: {
            args: Prisma.alunoturmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>[]
          }
          create: {
            args: Prisma.alunoturmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          createMany: {
            args: Prisma.alunoturmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alunoturmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          update: {
            args: Prisma.alunoturmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          deleteMany: {
            args: Prisma.alunoturmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alunoturmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alunoturmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunoturmaPayload>
          }
          aggregate: {
            args: Prisma.AlunoturmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunoturma>
          }
          groupBy: {
            args: Prisma.alunoturmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoturmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.alunoturmaCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoturmaCountAggregateOutputType> | number
          }
        }
      }
      apostila: {
        payload: Prisma.$apostilaPayload<ExtArgs>
        fields: Prisma.apostilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apostilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apostilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          findFirst: {
            args: Prisma.apostilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apostilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          findMany: {
            args: Prisma.apostilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>[]
          }
          create: {
            args: Prisma.apostilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          createMany: {
            args: Prisma.apostilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.apostilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          update: {
            args: Prisma.apostilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          deleteMany: {
            args: Prisma.apostilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apostilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.apostilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apostilaPayload>
          }
          aggregate: {
            args: Prisma.ApostilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApostila>
          }
          groupBy: {
            args: Prisma.apostilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApostilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.apostilaCountArgs<ExtArgs>
            result: $Utils.Optional<ApostilaCountAggregateOutputType> | number
          }
        }
      }
      avaliacao: {
        payload: Prisma.$avaliacaoPayload<ExtArgs>
        fields: Prisma.avaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          findFirst: {
            args: Prisma.avaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          findMany: {
            args: Prisma.avaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>[]
          }
          create: {
            args: Prisma.avaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          createMany: {
            args: Prisma.avaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.avaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          update: {
            args: Prisma.avaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.avaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.avaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.avaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      curso: {
        payload: Prisma.$cursoPayload<ExtArgs>
        fields: Prisma.cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findFirst: {
            args: Prisma.cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findMany: {
            args: Prisma.cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          create: {
            args: Prisma.cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          createMany: {
            args: Prisma.cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          update: {
            args: Prisma.cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          deleteMany: {
            args: Prisma.cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      formapagamento: {
        payload: Prisma.$formapagamentoPayload<ExtArgs>
        fields: Prisma.formapagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formapagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formapagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          findFirst: {
            args: Prisma.formapagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formapagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          findMany: {
            args: Prisma.formapagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>[]
          }
          create: {
            args: Prisma.formapagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          createMany: {
            args: Prisma.formapagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formapagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          update: {
            args: Prisma.formapagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          deleteMany: {
            args: Prisma.formapagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formapagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formapagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formapagamentoPayload>
          }
          aggregate: {
            args: Prisma.FormapagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormapagamento>
          }
          groupBy: {
            args: Prisma.formapagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormapagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.formapagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<FormapagamentoCountAggregateOutputType> | number
          }
        }
      }
      modulo: {
        payload: Prisma.$moduloPayload<ExtArgs>
        fields: Prisma.moduloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          findFirst: {
            args: Prisma.moduloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          findMany: {
            args: Prisma.moduloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>[]
          }
          create: {
            args: Prisma.moduloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          createMany: {
            args: Prisma.moduloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.moduloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          update: {
            args: Prisma.moduloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          deleteMany: {
            args: Prisma.moduloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.moduloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.moduloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      parceria: {
        payload: Prisma.$parceriaPayload<ExtArgs>
        fields: Prisma.parceriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.parceriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.parceriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          findFirst: {
            args: Prisma.parceriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.parceriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          findMany: {
            args: Prisma.parceriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>[]
          }
          create: {
            args: Prisma.parceriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          createMany: {
            args: Prisma.parceriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.parceriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          update: {
            args: Prisma.parceriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          deleteMany: {
            args: Prisma.parceriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.parceriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.parceriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$parceriaPayload>
          }
          aggregate: {
            args: Prisma.ParceriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParceria>
          }
          groupBy: {
            args: Prisma.parceriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParceriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.parceriaCountArgs<ExtArgs>
            result: $Utils.Optional<ParceriaCountAggregateOutputType> | number
          }
        }
      }
      plano: {
        payload: Prisma.$planoPayload<ExtArgs>
        fields: Prisma.planoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.planoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.planoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          findFirst: {
            args: Prisma.planoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.planoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          findMany: {
            args: Prisma.planoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>[]
          }
          create: {
            args: Prisma.planoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          createMany: {
            args: Prisma.planoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.planoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          update: {
            args: Prisma.planoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          deleteMany: {
            args: Prisma.planoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.planoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.planoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planoPayload>
          }
          aggregate: {
            args: Prisma.PlanoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlano>
          }
          groupBy: {
            args: Prisma.planoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanoGroupByOutputType>[]
          }
          count: {
            args: Prisma.planoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanoCountAggregateOutputType> | number
          }
        }
      }
      progressoapostila: {
        payload: Prisma.$progressoapostilaPayload<ExtArgs>
        fields: Prisma.progressoapostilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progressoapostilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progressoapostilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          findFirst: {
            args: Prisma.progressoapostilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progressoapostilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          findMany: {
            args: Prisma.progressoapostilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>[]
          }
          create: {
            args: Prisma.progressoapostilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          createMany: {
            args: Prisma.progressoapostilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.progressoapostilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          update: {
            args: Prisma.progressoapostilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          deleteMany: {
            args: Prisma.progressoapostilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progressoapostilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.progressoapostilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoapostilaPayload>
          }
          aggregate: {
            args: Prisma.ProgressoapostilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoapostila>
          }
          groupBy: {
            args: Prisma.progressoapostilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoapostilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.progressoapostilaCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoapostilaCountAggregateOutputType> | number
          }
        }
      }
      progressoavaliacao: {
        payload: Prisma.$progressoavaliacaoPayload<ExtArgs>
        fields: Prisma.progressoavaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progressoavaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progressoavaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          findFirst: {
            args: Prisma.progressoavaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progressoavaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          findMany: {
            args: Prisma.progressoavaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>[]
          }
          create: {
            args: Prisma.progressoavaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          createMany: {
            args: Prisma.progressoavaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.progressoavaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          update: {
            args: Prisma.progressoavaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.progressoavaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progressoavaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.progressoavaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressoavaliacaoPayload>
          }
          aggregate: {
            args: Prisma.ProgressoavaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoavaliacao>
          }
          groupBy: {
            args: Prisma.progressoavaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoavaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.progressoavaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoavaliacaoCountAggregateOutputType> | number
          }
        }
      }
      progressovideo: {
        payload: Prisma.$progressovideoPayload<ExtArgs>
        fields: Prisma.progressovideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progressovideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progressovideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          findFirst: {
            args: Prisma.progressovideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progressovideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          findMany: {
            args: Prisma.progressovideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>[]
          }
          create: {
            args: Prisma.progressovideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          createMany: {
            args: Prisma.progressovideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.progressovideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          update: {
            args: Prisma.progressovideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          deleteMany: {
            args: Prisma.progressovideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progressovideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.progressovideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressovideoPayload>
          }
          aggregate: {
            args: Prisma.ProgressovideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressovideo>
          }
          groupBy: {
            args: Prisma.progressovideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressovideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.progressovideoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressovideoCountAggregateOutputType> | number
          }
        }
      }
      turma: {
        payload: Prisma.$turmaPayload<ExtArgs>
        fields: Prisma.turmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.turmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.turmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          findFirst: {
            args: Prisma.turmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.turmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          findMany: {
            args: Prisma.turmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>[]
          }
          create: {
            args: Prisma.turmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          createMany: {
            args: Prisma.turmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.turmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          update: {
            args: Prisma.turmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          deleteMany: {
            args: Prisma.turmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.turmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.turmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.turmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.turmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      video: {
        payload: Prisma.$videoPayload<ExtArgs>
        fields: Prisma.videoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          findFirst: {
            args: Prisma.videoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          findMany: {
            args: Prisma.videoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>[]
          }
          create: {
            args: Prisma.videoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          createMany: {
            args: Prisma.videoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.videoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          update: {
            args: Prisma.videoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          deleteMany: {
            args: Prisma.videoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.videoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.videoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.videoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alunoturma?: alunoturmaOmit
    apostila?: apostilaOmit
    avaliacao?: avaliacaoOmit
    curso?: cursoOmit
    formapagamento?: formapagamentoOmit
    modulo?: moduloOmit
    parceria?: parceriaOmit
    plano?: planoOmit
    progressoapostila?: progressoapostilaOmit
    progressoavaliacao?: progressoavaliacaoOmit
    progressovideo?: progressovideoOmit
    turma?: turmaOmit
    usuario?: usuarioOmit
    video?: videoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApostilaCountOutputType
   */

  export type ApostilaCountOutputType = {
    progressoapostila: number
  }

  export type ApostilaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressoapostila?: boolean | ApostilaCountOutputTypeCountProgressoapostilaArgs
  }

  // Custom InputTypes
  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApostilaCountOutputType
     */
    select?: ApostilaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeCountProgressoapostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoapostilaWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    progressoavaliacao: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressoavaliacao?: boolean | AvaliacaoCountOutputTypeCountProgressoavaliacaoArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountProgressoavaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoavaliacaoWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    modulo: number
    turma: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | CursoCountOutputTypeCountModuloArgs
    turma?: boolean | CursoCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountModuloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduloWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmaWhereInput
  }


  /**
   * Count Type ModuloCountOutputType
   */

  export type ModuloCountOutputType = {
    apostila: number
    avaliacao: number
    video: number
  }

  export type ModuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apostila?: boolean | ModuloCountOutputTypeCountApostilaArgs
    avaliacao?: boolean | ModuloCountOutputTypeCountAvaliacaoArgs
    video?: boolean | ModuloCountOutputTypeCountVideoArgs
  }

  // Custom InputTypes
  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuloCountOutputType
     */
    select?: ModuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountApostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apostilaWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacaoWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput
  }


  /**
   * Count Type PlanoCountOutputType
   */

  export type PlanoCountOutputType = {
    usuario: number
  }

  export type PlanoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PlanoCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoCountOutputType
     */
    select?: PlanoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunoturma: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunoturma?: boolean | TurmaCountOutputTypeCountAlunoturmaArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunoturmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunoturmaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    alunoturma: number
    formapagamento: number
    parceria: number
    progressoapostila: number
    progressoavaliacao: number
    progressovideo: number
    turma: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunoturma?: boolean | UsuarioCountOutputTypeCountAlunoturmaArgs
    formapagamento?: boolean | UsuarioCountOutputTypeCountFormapagamentoArgs
    parceria?: boolean | UsuarioCountOutputTypeCountParceriaArgs
    progressoapostila?: boolean | UsuarioCountOutputTypeCountProgressoapostilaArgs
    progressoavaliacao?: boolean | UsuarioCountOutputTypeCountProgressoavaliacaoArgs
    progressovideo?: boolean | UsuarioCountOutputTypeCountProgressovideoArgs
    turma?: boolean | UsuarioCountOutputTypeCountTurmaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAlunoturmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunoturmaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFormapagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formapagamentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParceriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parceriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoapostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoapostilaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoavaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoavaliacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressovideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressovideoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmaWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    progressovideo: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressovideo?: boolean | VideoCountOutputTypeCountProgressovideoArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountProgressovideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressovideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alunoturma
   */

  export type AggregateAlunoturma = {
    _count: AlunoturmaCountAggregateOutputType | null
    _avg: AlunoturmaAvgAggregateOutputType | null
    _sum: AlunoturmaSumAggregateOutputType | null
    _min: AlunoturmaMinAggregateOutputType | null
    _max: AlunoturmaMaxAggregateOutputType | null
  }

  export type AlunoturmaAvgAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoturmaSumAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoturmaMinAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoturmaMaxAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoturmaCountAggregateOutputType = {
    alunoId: number
    turmaId: number
    _all: number
  }


  export type AlunoturmaAvgAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoturmaSumAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoturmaMinAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoturmaMaxAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoturmaCountAggregateInputType = {
    alunoId?: true
    turmaId?: true
    _all?: true
  }

  export type AlunoturmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunoturma to aggregate.
     */
    where?: alunoturmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunoturmas to fetch.
     */
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alunoturmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunoturmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunoturmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alunoturmas
    **/
    _count?: true | AlunoturmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoturmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoturmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoturmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoturmaMaxAggregateInputType
  }

  export type GetAlunoturmaAggregateType<T extends AlunoturmaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunoturma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunoturma[P]>
      : GetScalarType<T[P], AggregateAlunoturma[P]>
  }




  export type alunoturmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunoturmaWhereInput
    orderBy?: alunoturmaOrderByWithAggregationInput | alunoturmaOrderByWithAggregationInput[]
    by: AlunoturmaScalarFieldEnum[] | AlunoturmaScalarFieldEnum
    having?: alunoturmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoturmaCountAggregateInputType | true
    _avg?: AlunoturmaAvgAggregateInputType
    _sum?: AlunoturmaSumAggregateInputType
    _min?: AlunoturmaMinAggregateInputType
    _max?: AlunoturmaMaxAggregateInputType
  }

  export type AlunoturmaGroupByOutputType = {
    alunoId: number
    turmaId: number
    _count: AlunoturmaCountAggregateOutputType | null
    _avg: AlunoturmaAvgAggregateOutputType | null
    _sum: AlunoturmaSumAggregateOutputType | null
    _min: AlunoturmaMinAggregateOutputType | null
    _max: AlunoturmaMaxAggregateOutputType | null
  }

  type GetAlunoturmaGroupByPayload<T extends alunoturmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoturmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoturmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoturmaGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoturmaGroupByOutputType[P]>
        }
      >
    >


  export type alunoturmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    turmaId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    turma?: boolean | turmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunoturma"]>



  export type alunoturmaSelectScalar = {
    alunoId?: boolean
    turmaId?: boolean
  }

  export type alunoturmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "turmaId", ExtArgs["result"]["alunoturma"]>
  export type alunoturmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    turma?: boolean | turmaDefaultArgs<ExtArgs>
  }

  export type $alunoturmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alunoturma"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      turma: Prisma.$turmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      turmaId: number
    }, ExtArgs["result"]["alunoturma"]>
    composites: {}
  }

  type alunoturmaGetPayload<S extends boolean | null | undefined | alunoturmaDefaultArgs> = $Result.GetResult<Prisma.$alunoturmaPayload, S>

  type alunoturmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alunoturmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoturmaCountAggregateInputType | true
    }

  export interface alunoturmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alunoturma'], meta: { name: 'alunoturma' } }
    /**
     * Find zero or one Alunoturma that matches the filter.
     * @param {alunoturmaFindUniqueArgs} args - Arguments to find a Alunoturma
     * @example
     * // Get one Alunoturma
     * const alunoturma = await prisma.alunoturma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alunoturmaFindUniqueArgs>(args: SelectSubset<T, alunoturmaFindUniqueArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alunoturma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alunoturmaFindUniqueOrThrowArgs} args - Arguments to find a Alunoturma
     * @example
     * // Get one Alunoturma
     * const alunoturma = await prisma.alunoturma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alunoturmaFindUniqueOrThrowArgs>(args: SelectSubset<T, alunoturmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alunoturma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaFindFirstArgs} args - Arguments to find a Alunoturma
     * @example
     * // Get one Alunoturma
     * const alunoturma = await prisma.alunoturma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alunoturmaFindFirstArgs>(args?: SelectSubset<T, alunoturmaFindFirstArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alunoturma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaFindFirstOrThrowArgs} args - Arguments to find a Alunoturma
     * @example
     * // Get one Alunoturma
     * const alunoturma = await prisma.alunoturma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alunoturmaFindFirstOrThrowArgs>(args?: SelectSubset<T, alunoturmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunoturmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunoturmas
     * const alunoturmas = await prisma.alunoturma.findMany()
     * 
     * // Get first 10 Alunoturmas
     * const alunoturmas = await prisma.alunoturma.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const alunoturmaWithAlunoIdOnly = await prisma.alunoturma.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends alunoturmaFindManyArgs>(args?: SelectSubset<T, alunoturmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alunoturma.
     * @param {alunoturmaCreateArgs} args - Arguments to create a Alunoturma.
     * @example
     * // Create one Alunoturma
     * const Alunoturma = await prisma.alunoturma.create({
     *   data: {
     *     // ... data to create a Alunoturma
     *   }
     * })
     * 
     */
    create<T extends alunoturmaCreateArgs>(args: SelectSubset<T, alunoturmaCreateArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunoturmas.
     * @param {alunoturmaCreateManyArgs} args - Arguments to create many Alunoturmas.
     * @example
     * // Create many Alunoturmas
     * const alunoturma = await prisma.alunoturma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alunoturmaCreateManyArgs>(args?: SelectSubset<T, alunoturmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alunoturma.
     * @param {alunoturmaDeleteArgs} args - Arguments to delete one Alunoturma.
     * @example
     * // Delete one Alunoturma
     * const Alunoturma = await prisma.alunoturma.delete({
     *   where: {
     *     // ... filter to delete one Alunoturma
     *   }
     * })
     * 
     */
    delete<T extends alunoturmaDeleteArgs>(args: SelectSubset<T, alunoturmaDeleteArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alunoturma.
     * @param {alunoturmaUpdateArgs} args - Arguments to update one Alunoturma.
     * @example
     * // Update one Alunoturma
     * const alunoturma = await prisma.alunoturma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alunoturmaUpdateArgs>(args: SelectSubset<T, alunoturmaUpdateArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunoturmas.
     * @param {alunoturmaDeleteManyArgs} args - Arguments to filter Alunoturmas to delete.
     * @example
     * // Delete a few Alunoturmas
     * const { count } = await prisma.alunoturma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alunoturmaDeleteManyArgs>(args?: SelectSubset<T, alunoturmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunoturmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunoturmas
     * const alunoturma = await prisma.alunoturma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alunoturmaUpdateManyArgs>(args: SelectSubset<T, alunoturmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alunoturma.
     * @param {alunoturmaUpsertArgs} args - Arguments to update or create a Alunoturma.
     * @example
     * // Update or create a Alunoturma
     * const alunoturma = await prisma.alunoturma.upsert({
     *   create: {
     *     // ... data to create a Alunoturma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alunoturma we want to update
     *   }
     * })
     */
    upsert<T extends alunoturmaUpsertArgs>(args: SelectSubset<T, alunoturmaUpsertArgs<ExtArgs>>): Prisma__alunoturmaClient<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunoturmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaCountArgs} args - Arguments to filter Alunoturmas to count.
     * @example
     * // Count the number of Alunoturmas
     * const count = await prisma.alunoturma.count({
     *   where: {
     *     // ... the filter for the Alunoturmas we want to count
     *   }
     * })
    **/
    count<T extends alunoturmaCountArgs>(
      args?: Subset<T, alunoturmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoturmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alunoturma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoturmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunoturmaAggregateArgs>(args: Subset<T, AlunoturmaAggregateArgs>): Prisma.PrismaPromise<GetAlunoturmaAggregateType<T>>

    /**
     * Group by Alunoturma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunoturmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alunoturmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alunoturmaGroupByArgs['orderBy'] }
        : { orderBy?: alunoturmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alunoturmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoturmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alunoturma model
   */
  readonly fields: alunoturmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alunoturma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alunoturmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends turmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, turmaDefaultArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alunoturma model
   */
  interface alunoturmaFieldRefs {
    readonly alunoId: FieldRef<"alunoturma", 'Int'>
    readonly turmaId: FieldRef<"alunoturma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * alunoturma findUnique
   */
  export type alunoturmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter, which alunoturma to fetch.
     */
    where: alunoturmaWhereUniqueInput
  }

  /**
   * alunoturma findUniqueOrThrow
   */
  export type alunoturmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter, which alunoturma to fetch.
     */
    where: alunoturmaWhereUniqueInput
  }

  /**
   * alunoturma findFirst
   */
  export type alunoturmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter, which alunoturma to fetch.
     */
    where?: alunoturmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunoturmas to fetch.
     */
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunoturmas.
     */
    cursor?: alunoturmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunoturmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunoturmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunoturmas.
     */
    distinct?: AlunoturmaScalarFieldEnum | AlunoturmaScalarFieldEnum[]
  }

  /**
   * alunoturma findFirstOrThrow
   */
  export type alunoturmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter, which alunoturma to fetch.
     */
    where?: alunoturmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunoturmas to fetch.
     */
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunoturmas.
     */
    cursor?: alunoturmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunoturmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunoturmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunoturmas.
     */
    distinct?: AlunoturmaScalarFieldEnum | AlunoturmaScalarFieldEnum[]
  }

  /**
   * alunoturma findMany
   */
  export type alunoturmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter, which alunoturmas to fetch.
     */
    where?: alunoturmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunoturmas to fetch.
     */
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alunoturmas.
     */
    cursor?: alunoturmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunoturmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunoturmas.
     */
    skip?: number
    distinct?: AlunoturmaScalarFieldEnum | AlunoturmaScalarFieldEnum[]
  }

  /**
   * alunoturma create
   */
  export type alunoturmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * The data needed to create a alunoturma.
     */
    data: XOR<alunoturmaCreateInput, alunoturmaUncheckedCreateInput>
  }

  /**
   * alunoturma createMany
   */
  export type alunoturmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alunoturmas.
     */
    data: alunoturmaCreateManyInput | alunoturmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alunoturma update
   */
  export type alunoturmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * The data needed to update a alunoturma.
     */
    data: XOR<alunoturmaUpdateInput, alunoturmaUncheckedUpdateInput>
    /**
     * Choose, which alunoturma to update.
     */
    where: alunoturmaWhereUniqueInput
  }

  /**
   * alunoturma updateMany
   */
  export type alunoturmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alunoturmas.
     */
    data: XOR<alunoturmaUpdateManyMutationInput, alunoturmaUncheckedUpdateManyInput>
    /**
     * Filter which alunoturmas to update
     */
    where?: alunoturmaWhereInput
    /**
     * Limit how many alunoturmas to update.
     */
    limit?: number
  }

  /**
   * alunoturma upsert
   */
  export type alunoturmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * The filter to search for the alunoturma to update in case it exists.
     */
    where: alunoturmaWhereUniqueInput
    /**
     * In case the alunoturma found by the `where` argument doesn't exist, create a new alunoturma with this data.
     */
    create: XOR<alunoturmaCreateInput, alunoturmaUncheckedCreateInput>
    /**
     * In case the alunoturma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alunoturmaUpdateInput, alunoturmaUncheckedUpdateInput>
  }

  /**
   * alunoturma delete
   */
  export type alunoturmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    /**
     * Filter which alunoturma to delete.
     */
    where: alunoturmaWhereUniqueInput
  }

  /**
   * alunoturma deleteMany
   */
  export type alunoturmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunoturmas to delete
     */
    where?: alunoturmaWhereInput
    /**
     * Limit how many alunoturmas to delete.
     */
    limit?: number
  }

  /**
   * alunoturma without action
   */
  export type alunoturmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
  }


  /**
   * Model apostila
   */

  export type AggregateApostila = {
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  export type ApostilaAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivoUrl: string | null
  }

  export type ApostilaMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivoUrl: string | null
  }

  export type ApostilaCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    arquivoUrl: number
    _all: number
  }


  export type ApostilaAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
  }

  export type ApostilaMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
  }

  export type ApostilaCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
    _all?: true
  }

  export type ApostilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apostila to aggregate.
     */
    where?: apostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apostilas to fetch.
     */
    orderBy?: apostilaOrderByWithRelationInput | apostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apostilas
    **/
    _count?: true | ApostilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApostilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApostilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApostilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApostilaMaxAggregateInputType
  }

  export type GetApostilaAggregateType<T extends ApostilaAggregateArgs> = {
        [P in keyof T & keyof AggregateApostila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApostila[P]>
      : GetScalarType<T[P], AggregateApostila[P]>
  }




  export type apostilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apostilaWhereInput
    orderBy?: apostilaOrderByWithAggregationInput | apostilaOrderByWithAggregationInput[]
    by: ApostilaScalarFieldEnum[] | ApostilaScalarFieldEnum
    having?: apostilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApostilaCountAggregateInputType | true
    _avg?: ApostilaAvgAggregateInputType
    _sum?: ApostilaSumAggregateInputType
    _min?: ApostilaMinAggregateInputType
    _max?: ApostilaMaxAggregateInputType
  }

  export type ApostilaGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    arquivoUrl: string
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  type GetApostilaGroupByPayload<T extends apostilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApostilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApostilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
            : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
        }
      >
    >


  export type apostilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivoUrl?: boolean
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    progressoapostila?: boolean | apostila$progressoapostilaArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apostila"]>



  export type apostilaSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivoUrl?: boolean
  }

  export type apostilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "arquivoUrl", ExtArgs["result"]["apostila"]>
  export type apostilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    progressoapostila?: boolean | apostila$progressoapostilaArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $apostilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apostila"
    objects: {
      modulo: Prisma.$moduloPayload<ExtArgs>
      progressoapostila: Prisma.$progressoapostilaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      arquivoUrl: string
    }, ExtArgs["result"]["apostila"]>
    composites: {}
  }

  type apostilaGetPayload<S extends boolean | null | undefined | apostilaDefaultArgs> = $Result.GetResult<Prisma.$apostilaPayload, S>

  type apostilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apostilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApostilaCountAggregateInputType | true
    }

  export interface apostilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apostila'], meta: { name: 'apostila' } }
    /**
     * Find zero or one Apostila that matches the filter.
     * @param {apostilaFindUniqueArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apostilaFindUniqueArgs>(args: SelectSubset<T, apostilaFindUniqueArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apostila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apostilaFindUniqueOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apostilaFindUniqueOrThrowArgs>(args: SelectSubset<T, apostilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaFindFirstArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apostilaFindFirstArgs>(args?: SelectSubset<T, apostilaFindFirstArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaFindFirstOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apostilaFindFirstOrThrowArgs>(args?: SelectSubset<T, apostilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apostilas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apostilas
     * const apostilas = await prisma.apostila.findMany()
     * 
     * // Get first 10 Apostilas
     * const apostilas = await prisma.apostila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apostilaWithIdOnly = await prisma.apostila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apostilaFindManyArgs>(args?: SelectSubset<T, apostilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apostila.
     * @param {apostilaCreateArgs} args - Arguments to create a Apostila.
     * @example
     * // Create one Apostila
     * const Apostila = await prisma.apostila.create({
     *   data: {
     *     // ... data to create a Apostila
     *   }
     * })
     * 
     */
    create<T extends apostilaCreateArgs>(args: SelectSubset<T, apostilaCreateArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apostilas.
     * @param {apostilaCreateManyArgs} args - Arguments to create many Apostilas.
     * @example
     * // Create many Apostilas
     * const apostila = await prisma.apostila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apostilaCreateManyArgs>(args?: SelectSubset<T, apostilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apostila.
     * @param {apostilaDeleteArgs} args - Arguments to delete one Apostila.
     * @example
     * // Delete one Apostila
     * const Apostila = await prisma.apostila.delete({
     *   where: {
     *     // ... filter to delete one Apostila
     *   }
     * })
     * 
     */
    delete<T extends apostilaDeleteArgs>(args: SelectSubset<T, apostilaDeleteArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apostila.
     * @param {apostilaUpdateArgs} args - Arguments to update one Apostila.
     * @example
     * // Update one Apostila
     * const apostila = await prisma.apostila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apostilaUpdateArgs>(args: SelectSubset<T, apostilaUpdateArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apostilas.
     * @param {apostilaDeleteManyArgs} args - Arguments to filter Apostilas to delete.
     * @example
     * // Delete a few Apostilas
     * const { count } = await prisma.apostila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apostilaDeleteManyArgs>(args?: SelectSubset<T, apostilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apostilas
     * const apostila = await prisma.apostila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apostilaUpdateManyArgs>(args: SelectSubset<T, apostilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apostila.
     * @param {apostilaUpsertArgs} args - Arguments to update or create a Apostila.
     * @example
     * // Update or create a Apostila
     * const apostila = await prisma.apostila.upsert({
     *   create: {
     *     // ... data to create a Apostila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apostila we want to update
     *   }
     * })
     */
    upsert<T extends apostilaUpsertArgs>(args: SelectSubset<T, apostilaUpsertArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaCountArgs} args - Arguments to filter Apostilas to count.
     * @example
     * // Count the number of Apostilas
     * const count = await prisma.apostila.count({
     *   where: {
     *     // ... the filter for the Apostilas we want to count
     *   }
     * })
    **/
    count<T extends apostilaCountArgs>(
      args?: Subset<T, apostilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApostilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApostilaAggregateArgs>(args: Subset<T, ApostilaAggregateArgs>): Prisma.PrismaPromise<GetApostilaAggregateType<T>>

    /**
     * Group by Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apostilaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends apostilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apostilaGroupByArgs['orderBy'] }
        : { orderBy?: apostilaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, apostilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApostilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apostila model
   */
  readonly fields: apostilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apostila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apostilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends moduloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduloDefaultArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressoapostila<T extends apostila$progressoapostilaArgs<ExtArgs> = {}>(args?: Subset<T, apostila$progressoapostilaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the apostila model
   */
  interface apostilaFieldRefs {
    readonly id: FieldRef<"apostila", 'Int'>
    readonly moduloId: FieldRef<"apostila", 'Int'>
    readonly titulo: FieldRef<"apostila", 'String'>
    readonly arquivoUrl: FieldRef<"apostila", 'String'>
  }
    

  // Custom InputTypes
  /**
   * apostila findUnique
   */
  export type apostilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter, which apostila to fetch.
     */
    where: apostilaWhereUniqueInput
  }

  /**
   * apostila findUniqueOrThrow
   */
  export type apostilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter, which apostila to fetch.
     */
    where: apostilaWhereUniqueInput
  }

  /**
   * apostila findFirst
   */
  export type apostilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter, which apostila to fetch.
     */
    where?: apostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apostilas to fetch.
     */
    orderBy?: apostilaOrderByWithRelationInput | apostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apostilas.
     */
    cursor?: apostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * apostila findFirstOrThrow
   */
  export type apostilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter, which apostila to fetch.
     */
    where?: apostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apostilas to fetch.
     */
    orderBy?: apostilaOrderByWithRelationInput | apostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apostilas.
     */
    cursor?: apostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * apostila findMany
   */
  export type apostilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter, which apostilas to fetch.
     */
    where?: apostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apostilas to fetch.
     */
    orderBy?: apostilaOrderByWithRelationInput | apostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apostilas.
     */
    cursor?: apostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apostilas.
     */
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * apostila create
   */
  export type apostilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * The data needed to create a apostila.
     */
    data: XOR<apostilaCreateInput, apostilaUncheckedCreateInput>
  }

  /**
   * apostila createMany
   */
  export type apostilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apostilas.
     */
    data: apostilaCreateManyInput | apostilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apostila update
   */
  export type apostilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * The data needed to update a apostila.
     */
    data: XOR<apostilaUpdateInput, apostilaUncheckedUpdateInput>
    /**
     * Choose, which apostila to update.
     */
    where: apostilaWhereUniqueInput
  }

  /**
   * apostila updateMany
   */
  export type apostilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apostilas.
     */
    data: XOR<apostilaUpdateManyMutationInput, apostilaUncheckedUpdateManyInput>
    /**
     * Filter which apostilas to update
     */
    where?: apostilaWhereInput
    /**
     * Limit how many apostilas to update.
     */
    limit?: number
  }

  /**
   * apostila upsert
   */
  export type apostilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * The filter to search for the apostila to update in case it exists.
     */
    where: apostilaWhereUniqueInput
    /**
     * In case the apostila found by the `where` argument doesn't exist, create a new apostila with this data.
     */
    create: XOR<apostilaCreateInput, apostilaUncheckedCreateInput>
    /**
     * In case the apostila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apostilaUpdateInput, apostilaUncheckedUpdateInput>
  }

  /**
   * apostila delete
   */
  export type apostilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    /**
     * Filter which apostila to delete.
     */
    where: apostilaWhereUniqueInput
  }

  /**
   * apostila deleteMany
   */
  export type apostilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apostilas to delete
     */
    where?: apostilaWhereInput
    /**
     * Limit how many apostilas to delete.
     */
    limit?: number
  }

  /**
   * apostila.progressoapostila
   */
  export type apostila$progressoapostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    where?: progressoapostilaWhereInput
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    cursor?: progressoapostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoapostilaScalarFieldEnum | ProgressoapostilaScalarFieldEnum[]
  }

  /**
   * apostila without action
   */
  export type apostilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
  }


  /**
   * Model avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    descricao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacao to aggregate.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type avaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacaoWhereInput
    orderBy?: avaliacaoOrderByWithAggregationInput | avaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: avaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    descricao: string | null
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends avaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type avaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    progressoavaliacao?: boolean | avaliacao$progressoavaliacaoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type avaliacaoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
  }

  export type avaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "descricao", ExtArgs["result"]["avaliacao"]>
  export type avaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    progressoavaliacao?: boolean | avaliacao$progressoavaliacaoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $avaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacao"
    objects: {
      modulo: Prisma.$moduloPayload<ExtArgs>
      progressoavaliacao: Prisma.$progressoavaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      descricao: string | null
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type avaliacaoGetPayload<S extends boolean | null | undefined | avaliacaoDefaultArgs> = $Result.GetResult<Prisma.$avaliacaoPayload, S>

  type avaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface avaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacao'], meta: { name: 'avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {avaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacaoFindUniqueArgs>(args: SelectSubset<T, avaliacaoFindUniqueArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacaoFindFirstArgs>(args?: SelectSubset<T, avaliacaoFindFirstArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends avaliacaoFindManyArgs>(args?: SelectSubset<T, avaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {avaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends avaliacaoCreateArgs>(args: SelectSubset<T, avaliacaoCreateArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {avaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacaoCreateManyArgs>(args?: SelectSubset<T, avaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {avaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends avaliacaoDeleteArgs>(args: SelectSubset<T, avaliacaoDeleteArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {avaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacaoUpdateArgs>(args: SelectSubset<T, avaliacaoUpdateArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {avaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacaoDeleteManyArgs>(args?: SelectSubset<T, avaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacaoUpdateManyArgs>(args: SelectSubset<T, avaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {avaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends avaliacaoUpsertArgs>(args: SelectSubset<T, avaliacaoUpsertArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends avaliacaoCountArgs>(
      args?: Subset<T, avaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends avaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: avaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, avaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacao model
   */
  readonly fields: avaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends moduloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduloDefaultArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressoavaliacao<T extends avaliacao$progressoavaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, avaliacao$progressoavaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the avaliacao model
   */
  interface avaliacaoFieldRefs {
    readonly id: FieldRef<"avaliacao", 'Int'>
    readonly moduloId: FieldRef<"avaliacao", 'Int'>
    readonly titulo: FieldRef<"avaliacao", 'String'>
    readonly descricao: FieldRef<"avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * avaliacao findUnique
   */
  export type avaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao findUniqueOrThrow
   */
  export type avaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao findFirst
   */
  export type avaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao findFirstOrThrow
   */
  export type avaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao findMany
   */
  export type avaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacaos to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao create
   */
  export type avaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a avaliacao.
     */
    data: XOR<avaliacaoCreateInput, avaliacaoUncheckedCreateInput>
  }

  /**
   * avaliacao createMany
   */
  export type avaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacaos.
     */
    data: avaliacaoCreateManyInput | avaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacao update
   */
  export type avaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a avaliacao.
     */
    data: XOR<avaliacaoUpdateInput, avaliacaoUncheckedUpdateInput>
    /**
     * Choose, which avaliacao to update.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao updateMany
   */
  export type avaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacaos.
     */
    data: XOR<avaliacaoUpdateManyMutationInput, avaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which avaliacaos to update
     */
    where?: avaliacaoWhereInput
    /**
     * Limit how many avaliacaos to update.
     */
    limit?: number
  }

  /**
   * avaliacao upsert
   */
  export type avaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the avaliacao to update in case it exists.
     */
    where: avaliacaoWhereUniqueInput
    /**
     * In case the avaliacao found by the `where` argument doesn't exist, create a new avaliacao with this data.
     */
    create: XOR<avaliacaoCreateInput, avaliacaoUncheckedCreateInput>
    /**
     * In case the avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacaoUpdateInput, avaliacaoUncheckedUpdateInput>
  }

  /**
   * avaliacao delete
   */
  export type avaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter which avaliacao to delete.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao deleteMany
   */
  export type avaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacaos to delete
     */
    where?: avaliacaoWhereInput
    /**
     * Limit how many avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * avaliacao.progressoavaliacao
   */
  export type avaliacao$progressoavaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    where?: progressoavaliacaoWhereInput
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    cursor?: progressoavaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoavaliacaoScalarFieldEnum | ProgressoavaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao without action
   */
  export type avaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    cargaHoraria: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    cargaHoraria: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    cargaHoraria: number | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    cargaHoraria: number | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoria: number
    cargaHoraria: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    cargaHoraria?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    cargaHoraria?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curso to aggregate.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursoWhereInput
    orderBy?: cursoOrderByWithAggregationInput | cursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    categoria: string
    cargaHoraria: number
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    cargaHoraria?: boolean
    modulo?: boolean | curso$moduloArgs<ExtArgs>
    turma?: boolean | curso$turmaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>



  export type cursoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    cargaHoraria?: boolean
  }

  export type cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "categoria" | "cargaHoraria", ExtArgs["result"]["curso"]>
  export type cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | curso$moduloArgs<ExtArgs>
    turma?: boolean | curso$turmaArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curso"
    objects: {
      modulo: Prisma.$moduloPayload<ExtArgs>[]
      turma: Prisma.$turmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      categoria: string
      cargaHoraria: number
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type cursoGetPayload<S extends boolean | null | undefined | cursoDefaultArgs> = $Result.GetResult<Prisma.$cursoPayload, S>

  type cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curso'], meta: { name: 'curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {cursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursoFindUniqueArgs>(args: SelectSubset<T, cursoFindUniqueArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursoFindFirstArgs>(args?: SelectSubset<T, cursoFindFirstArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cursoFindManyArgs>(args?: SelectSubset<T, cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {cursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends cursoCreateArgs>(args: SelectSubset<T, cursoCreateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursoCreateManyArgs>(args?: SelectSubset<T, cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Curso.
     * @param {cursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends cursoDeleteArgs>(args: SelectSubset<T, cursoDeleteArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {cursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursoUpdateArgs>(args: SelectSubset<T, cursoUpdateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursoDeleteManyArgs>(args?: SelectSubset<T, cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursoUpdateManyArgs>(args: SelectSubset<T, cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {cursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends cursoUpsertArgs>(args: SelectSubset<T, cursoUpsertArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursoCountArgs>(
      args?: Subset<T, cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursoGroupByArgs['orderBy'] }
        : { orderBy?: cursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curso model
   */
  readonly fields: cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends curso$moduloArgs<ExtArgs> = {}>(args?: Subset<T, curso$moduloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turma<T extends curso$turmaArgs<ExtArgs> = {}>(args?: Subset<T, curso$turmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the curso model
   */
  interface cursoFieldRefs {
    readonly id: FieldRef<"curso", 'Int'>
    readonly titulo: FieldRef<"curso", 'String'>
    readonly descricao: FieldRef<"curso", 'String'>
    readonly categoria: FieldRef<"curso", 'String'>
    readonly cargaHoraria: FieldRef<"curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * curso findUnique
   */
  export type cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findUniqueOrThrow
   */
  export type cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findFirst
   */
  export type cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findFirstOrThrow
   */
  export type cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findMany
   */
  export type cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso create
   */
  export type cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a curso.
     */
    data: XOR<cursoCreateInput, cursoUncheckedCreateInput>
  }

  /**
   * curso createMany
   */
  export type cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursoCreateManyInput | cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curso update
   */
  export type cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a curso.
     */
    data: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
    /**
     * Choose, which curso to update.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso updateMany
   */
  export type cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * curso upsert
   */
  export type cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the curso to update in case it exists.
     */
    where: cursoWhereUniqueInput
    /**
     * In case the curso found by the `where` argument doesn't exist, create a new curso with this data.
     */
    create: XOR<cursoCreateInput, cursoUncheckedCreateInput>
    /**
     * In case the curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
  }

  /**
   * curso delete
   */
  export type cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter which curso to delete.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso deleteMany
   */
  export type cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * curso.modulo
   */
  export type curso$moduloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    where?: moduloWhereInput
    orderBy?: moduloOrderByWithRelationInput | moduloOrderByWithRelationInput[]
    cursor?: moduloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * curso.turma
   */
  export type curso$turmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    where?: turmaWhereInput
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    cursor?: turmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * curso without action
   */
  export type cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
  }


  /**
   * Model formapagamento
   */

  export type AggregateFormapagamento = {
    _count: FormapagamentoCountAggregateOutputType | null
    _avg: FormapagamentoAvgAggregateOutputType | null
    _sum: FormapagamentoSumAggregateOutputType | null
    _min: FormapagamentoMinAggregateOutputType | null
    _max: FormapagamentoMaxAggregateOutputType | null
  }

  export type FormapagamentoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    parcelas: number | null
  }

  export type FormapagamentoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    parcelas: number | null
  }

  export type FormapagamentoMinAggregateOutputType = {
    id: number | null
    tipo: $Enums.formapagamento_tipo | null
    titular: string | null
    numero: string | null
    validade: string | null
    cvv: string | null
    usuarioId: number | null
    createdAt: Date | null
    parcelas: number | null
  }

  export type FormapagamentoMaxAggregateOutputType = {
    id: number | null
    tipo: $Enums.formapagamento_tipo | null
    titular: string | null
    numero: string | null
    validade: string | null
    cvv: string | null
    usuarioId: number | null
    createdAt: Date | null
    parcelas: number | null
  }

  export type FormapagamentoCountAggregateOutputType = {
    id: number
    tipo: number
    titular: number
    numero: number
    validade: number
    cvv: number
    usuarioId: number
    createdAt: number
    parcelas: number
    _all: number
  }


  export type FormapagamentoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    parcelas?: true
  }

  export type FormapagamentoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    parcelas?: true
  }

  export type FormapagamentoMinAggregateInputType = {
    id?: true
    tipo?: true
    titular?: true
    numero?: true
    validade?: true
    cvv?: true
    usuarioId?: true
    createdAt?: true
    parcelas?: true
  }

  export type FormapagamentoMaxAggregateInputType = {
    id?: true
    tipo?: true
    titular?: true
    numero?: true
    validade?: true
    cvv?: true
    usuarioId?: true
    createdAt?: true
    parcelas?: true
  }

  export type FormapagamentoCountAggregateInputType = {
    id?: true
    tipo?: true
    titular?: true
    numero?: true
    validade?: true
    cvv?: true
    usuarioId?: true
    createdAt?: true
    parcelas?: true
    _all?: true
  }

  export type FormapagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formapagamento to aggregate.
     */
    where?: formapagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formapagamentos to fetch.
     */
    orderBy?: formapagamentoOrderByWithRelationInput | formapagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formapagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formapagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formapagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formapagamentos
    **/
    _count?: true | FormapagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormapagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormapagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormapagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormapagamentoMaxAggregateInputType
  }

  export type GetFormapagamentoAggregateType<T extends FormapagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateFormapagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormapagamento[P]>
      : GetScalarType<T[P], AggregateFormapagamento[P]>
  }




  export type formapagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formapagamentoWhereInput
    orderBy?: formapagamentoOrderByWithAggregationInput | formapagamentoOrderByWithAggregationInput[]
    by: FormapagamentoScalarFieldEnum[] | FormapagamentoScalarFieldEnum
    having?: formapagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormapagamentoCountAggregateInputType | true
    _avg?: FormapagamentoAvgAggregateInputType
    _sum?: FormapagamentoSumAggregateInputType
    _min?: FormapagamentoMinAggregateInputType
    _max?: FormapagamentoMaxAggregateInputType
  }

  export type FormapagamentoGroupByOutputType = {
    id: number
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv: string | null
    usuarioId: number
    createdAt: Date
    parcelas: number
    _count: FormapagamentoCountAggregateOutputType | null
    _avg: FormapagamentoAvgAggregateOutputType | null
    _sum: FormapagamentoSumAggregateOutputType | null
    _min: FormapagamentoMinAggregateOutputType | null
    _max: FormapagamentoMaxAggregateOutputType | null
  }

  type GetFormapagamentoGroupByPayload<T extends formapagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormapagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormapagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormapagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], FormapagamentoGroupByOutputType[P]>
        }
      >
    >


  export type formapagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    titular?: boolean
    numero?: boolean
    validade?: boolean
    cvv?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    parcelas?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formapagamento"]>



  export type formapagamentoSelectScalar = {
    id?: boolean
    tipo?: boolean
    titular?: boolean
    numero?: boolean
    validade?: boolean
    cvv?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    parcelas?: boolean
  }

  export type formapagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "titular" | "numero" | "validade" | "cvv" | "usuarioId" | "createdAt" | "parcelas", ExtArgs["result"]["formapagamento"]>
  export type formapagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $formapagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formapagamento"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: $Enums.formapagamento_tipo
      titular: string
      numero: string
      validade: string
      cvv: string | null
      usuarioId: number
      createdAt: Date
      parcelas: number
    }, ExtArgs["result"]["formapagamento"]>
    composites: {}
  }

  type formapagamentoGetPayload<S extends boolean | null | undefined | formapagamentoDefaultArgs> = $Result.GetResult<Prisma.$formapagamentoPayload, S>

  type formapagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formapagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormapagamentoCountAggregateInputType | true
    }

  export interface formapagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formapagamento'], meta: { name: 'formapagamento' } }
    /**
     * Find zero or one Formapagamento that matches the filter.
     * @param {formapagamentoFindUniqueArgs} args - Arguments to find a Formapagamento
     * @example
     * // Get one Formapagamento
     * const formapagamento = await prisma.formapagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formapagamentoFindUniqueArgs>(args: SelectSubset<T, formapagamentoFindUniqueArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formapagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formapagamentoFindUniqueOrThrowArgs} args - Arguments to find a Formapagamento
     * @example
     * // Get one Formapagamento
     * const formapagamento = await prisma.formapagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formapagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, formapagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formapagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoFindFirstArgs} args - Arguments to find a Formapagamento
     * @example
     * // Get one Formapagamento
     * const formapagamento = await prisma.formapagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formapagamentoFindFirstArgs>(args?: SelectSubset<T, formapagamentoFindFirstArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formapagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoFindFirstOrThrowArgs} args - Arguments to find a Formapagamento
     * @example
     * // Get one Formapagamento
     * const formapagamento = await prisma.formapagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formapagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, formapagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formapagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formapagamentos
     * const formapagamentos = await prisma.formapagamento.findMany()
     * 
     * // Get first 10 Formapagamentos
     * const formapagamentos = await prisma.formapagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formapagamentoWithIdOnly = await prisma.formapagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends formapagamentoFindManyArgs>(args?: SelectSubset<T, formapagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formapagamento.
     * @param {formapagamentoCreateArgs} args - Arguments to create a Formapagamento.
     * @example
     * // Create one Formapagamento
     * const Formapagamento = await prisma.formapagamento.create({
     *   data: {
     *     // ... data to create a Formapagamento
     *   }
     * })
     * 
     */
    create<T extends formapagamentoCreateArgs>(args: SelectSubset<T, formapagamentoCreateArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formapagamentos.
     * @param {formapagamentoCreateManyArgs} args - Arguments to create many Formapagamentos.
     * @example
     * // Create many Formapagamentos
     * const formapagamento = await prisma.formapagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formapagamentoCreateManyArgs>(args?: SelectSubset<T, formapagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formapagamento.
     * @param {formapagamentoDeleteArgs} args - Arguments to delete one Formapagamento.
     * @example
     * // Delete one Formapagamento
     * const Formapagamento = await prisma.formapagamento.delete({
     *   where: {
     *     // ... filter to delete one Formapagamento
     *   }
     * })
     * 
     */
    delete<T extends formapagamentoDeleteArgs>(args: SelectSubset<T, formapagamentoDeleteArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formapagamento.
     * @param {formapagamentoUpdateArgs} args - Arguments to update one Formapagamento.
     * @example
     * // Update one Formapagamento
     * const formapagamento = await prisma.formapagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formapagamentoUpdateArgs>(args: SelectSubset<T, formapagamentoUpdateArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formapagamentos.
     * @param {formapagamentoDeleteManyArgs} args - Arguments to filter Formapagamentos to delete.
     * @example
     * // Delete a few Formapagamentos
     * const { count } = await prisma.formapagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formapagamentoDeleteManyArgs>(args?: SelectSubset<T, formapagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formapagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formapagamentos
     * const formapagamento = await prisma.formapagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formapagamentoUpdateManyArgs>(args: SelectSubset<T, formapagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formapagamento.
     * @param {formapagamentoUpsertArgs} args - Arguments to update or create a Formapagamento.
     * @example
     * // Update or create a Formapagamento
     * const formapagamento = await prisma.formapagamento.upsert({
     *   create: {
     *     // ... data to create a Formapagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formapagamento we want to update
     *   }
     * })
     */
    upsert<T extends formapagamentoUpsertArgs>(args: SelectSubset<T, formapagamentoUpsertArgs<ExtArgs>>): Prisma__formapagamentoClient<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formapagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoCountArgs} args - Arguments to filter Formapagamentos to count.
     * @example
     * // Count the number of Formapagamentos
     * const count = await prisma.formapagamento.count({
     *   where: {
     *     // ... the filter for the Formapagamentos we want to count
     *   }
     * })
    **/
    count<T extends formapagamentoCountArgs>(
      args?: Subset<T, formapagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormapagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formapagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormapagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormapagamentoAggregateArgs>(args: Subset<T, FormapagamentoAggregateArgs>): Prisma.PrismaPromise<GetFormapagamentoAggregateType<T>>

    /**
     * Group by Formapagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formapagamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formapagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formapagamentoGroupByArgs['orderBy'] }
        : { orderBy?: formapagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formapagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormapagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formapagamento model
   */
  readonly fields: formapagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formapagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formapagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formapagamento model
   */
  interface formapagamentoFieldRefs {
    readonly id: FieldRef<"formapagamento", 'Int'>
    readonly tipo: FieldRef<"formapagamento", 'formapagamento_tipo'>
    readonly titular: FieldRef<"formapagamento", 'String'>
    readonly numero: FieldRef<"formapagamento", 'String'>
    readonly validade: FieldRef<"formapagamento", 'String'>
    readonly cvv: FieldRef<"formapagamento", 'String'>
    readonly usuarioId: FieldRef<"formapagamento", 'Int'>
    readonly createdAt: FieldRef<"formapagamento", 'DateTime'>
    readonly parcelas: FieldRef<"formapagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * formapagamento findUnique
   */
  export type formapagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter, which formapagamento to fetch.
     */
    where: formapagamentoWhereUniqueInput
  }

  /**
   * formapagamento findUniqueOrThrow
   */
  export type formapagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter, which formapagamento to fetch.
     */
    where: formapagamentoWhereUniqueInput
  }

  /**
   * formapagamento findFirst
   */
  export type formapagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter, which formapagamento to fetch.
     */
    where?: formapagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formapagamentos to fetch.
     */
    orderBy?: formapagamentoOrderByWithRelationInput | formapagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formapagamentos.
     */
    cursor?: formapagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formapagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formapagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formapagamentos.
     */
    distinct?: FormapagamentoScalarFieldEnum | FormapagamentoScalarFieldEnum[]
  }

  /**
   * formapagamento findFirstOrThrow
   */
  export type formapagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter, which formapagamento to fetch.
     */
    where?: formapagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formapagamentos to fetch.
     */
    orderBy?: formapagamentoOrderByWithRelationInput | formapagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formapagamentos.
     */
    cursor?: formapagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formapagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formapagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formapagamentos.
     */
    distinct?: FormapagamentoScalarFieldEnum | FormapagamentoScalarFieldEnum[]
  }

  /**
   * formapagamento findMany
   */
  export type formapagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter, which formapagamentos to fetch.
     */
    where?: formapagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formapagamentos to fetch.
     */
    orderBy?: formapagamentoOrderByWithRelationInput | formapagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formapagamentos.
     */
    cursor?: formapagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formapagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formapagamentos.
     */
    skip?: number
    distinct?: FormapagamentoScalarFieldEnum | FormapagamentoScalarFieldEnum[]
  }

  /**
   * formapagamento create
   */
  export type formapagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a formapagamento.
     */
    data: XOR<formapagamentoCreateInput, formapagamentoUncheckedCreateInput>
  }

  /**
   * formapagamento createMany
   */
  export type formapagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formapagamentos.
     */
    data: formapagamentoCreateManyInput | formapagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formapagamento update
   */
  export type formapagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a formapagamento.
     */
    data: XOR<formapagamentoUpdateInput, formapagamentoUncheckedUpdateInput>
    /**
     * Choose, which formapagamento to update.
     */
    where: formapagamentoWhereUniqueInput
  }

  /**
   * formapagamento updateMany
   */
  export type formapagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formapagamentos.
     */
    data: XOR<formapagamentoUpdateManyMutationInput, formapagamentoUncheckedUpdateManyInput>
    /**
     * Filter which formapagamentos to update
     */
    where?: formapagamentoWhereInput
    /**
     * Limit how many formapagamentos to update.
     */
    limit?: number
  }

  /**
   * formapagamento upsert
   */
  export type formapagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the formapagamento to update in case it exists.
     */
    where: formapagamentoWhereUniqueInput
    /**
     * In case the formapagamento found by the `where` argument doesn't exist, create a new formapagamento with this data.
     */
    create: XOR<formapagamentoCreateInput, formapagamentoUncheckedCreateInput>
    /**
     * In case the formapagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formapagamentoUpdateInput, formapagamentoUncheckedUpdateInput>
  }

  /**
   * formapagamento delete
   */
  export type formapagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    /**
     * Filter which formapagamento to delete.
     */
    where: formapagamentoWhereUniqueInput
  }

  /**
   * formapagamento deleteMany
   */
  export type formapagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formapagamentos to delete
     */
    where?: formapagamentoWhereInput
    /**
     * Limit how many formapagamentos to delete.
     */
    limit?: number
  }

  /**
   * formapagamento without action
   */
  export type formapagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
  }


  /**
   * Model modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloMinAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    cursoId: number
    titulo: number
    ordem: number
    _all: number
  }


  export type ModuloAvgAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloSumAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloMinAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulo to aggregate.
     */
    where?: moduloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: moduloOrderByWithRelationInput | moduloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type moduloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduloWhereInput
    orderBy?: moduloOrderByWithAggregationInput | moduloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: moduloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _avg?: ModuloAvgAggregateInputType
    _sum?: ModuloSumAggregateInputType
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: number
    cursoId: number
    titulo: string
    ordem: number
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends moduloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type moduloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
    apostila?: boolean | modulo$apostilaArgs<ExtArgs>
    avaliacao?: boolean | modulo$avaliacaoArgs<ExtArgs>
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    video?: boolean | modulo$videoArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>



  export type moduloSelectScalar = {
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
  }

  export type moduloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cursoId" | "titulo" | "ordem", ExtArgs["result"]["modulo"]>
  export type moduloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apostila?: boolean | modulo$apostilaArgs<ExtArgs>
    avaliacao?: boolean | modulo$avaliacaoArgs<ExtArgs>
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    video?: boolean | modulo$videoArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $moduloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modulo"
    objects: {
      apostila: Prisma.$apostilaPayload<ExtArgs>[]
      avaliacao: Prisma.$avaliacaoPayload<ExtArgs>[]
      curso: Prisma.$cursoPayload<ExtArgs>
      video: Prisma.$videoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cursoId: number
      titulo: string
      ordem: number
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type moduloGetPayload<S extends boolean | null | undefined | moduloDefaultArgs> = $Result.GetResult<Prisma.$moduloPayload, S>

  type moduloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface moduloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modulo'], meta: { name: 'modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {moduloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduloFindUniqueArgs>(args: SelectSubset<T, moduloFindUniqueArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduloFindUniqueOrThrowArgs>(args: SelectSubset<T, moduloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduloFindFirstArgs>(args?: SelectSubset<T, moduloFindFirstArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduloFindFirstOrThrowArgs>(args?: SelectSubset<T, moduloFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moduloFindManyArgs>(args?: SelectSubset<T, moduloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulo.
     * @param {moduloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends moduloCreateArgs>(args: SelectSubset<T, moduloCreateArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {moduloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduloCreateManyArgs>(args?: SelectSubset<T, moduloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulo.
     * @param {moduloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends moduloDeleteArgs>(args: SelectSubset<T, moduloDeleteArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulo.
     * @param {moduloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduloUpdateArgs>(args: SelectSubset<T, moduloUpdateArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {moduloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduloDeleteManyArgs>(args?: SelectSubset<T, moduloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduloUpdateManyArgs>(args: SelectSubset<T, moduloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulo.
     * @param {moduloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends moduloUpsertArgs>(args: SelectSubset<T, moduloUpsertArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends moduloCountArgs>(
      args?: Subset<T, moduloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moduloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduloGroupByArgs['orderBy'] }
        : { orderBy?: moduloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moduloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modulo model
   */
  readonly fields: moduloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apostila<T extends modulo$apostilaArgs<ExtArgs> = {}>(args?: Subset<T, modulo$apostilaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacao<T extends modulo$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, modulo$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curso<T extends cursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursoDefaultArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends modulo$videoArgs<ExtArgs> = {}>(args?: Subset<T, modulo$videoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the modulo model
   */
  interface moduloFieldRefs {
    readonly id: FieldRef<"modulo", 'Int'>
    readonly cursoId: FieldRef<"modulo", 'Int'>
    readonly titulo: FieldRef<"modulo", 'String'>
    readonly ordem: FieldRef<"modulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * modulo findUnique
   */
  export type moduloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter, which modulo to fetch.
     */
    where: moduloWhereUniqueInput
  }

  /**
   * modulo findUniqueOrThrow
   */
  export type moduloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter, which modulo to fetch.
     */
    where: moduloWhereUniqueInput
  }

  /**
   * modulo findFirst
   */
  export type moduloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter, which modulo to fetch.
     */
    where?: moduloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: moduloOrderByWithRelationInput | moduloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: moduloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * modulo findFirstOrThrow
   */
  export type moduloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter, which modulo to fetch.
     */
    where?: moduloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: moduloOrderByWithRelationInput | moduloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: moduloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * modulo findMany
   */
  export type moduloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: moduloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: moduloOrderByWithRelationInput | moduloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modulos.
     */
    cursor?: moduloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * modulo create
   */
  export type moduloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * The data needed to create a modulo.
     */
    data: XOR<moduloCreateInput, moduloUncheckedCreateInput>
  }

  /**
   * modulo createMany
   */
  export type moduloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modulos.
     */
    data: moduloCreateManyInput | moduloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modulo update
   */
  export type moduloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * The data needed to update a modulo.
     */
    data: XOR<moduloUpdateInput, moduloUncheckedUpdateInput>
    /**
     * Choose, which modulo to update.
     */
    where: moduloWhereUniqueInput
  }

  /**
   * modulo updateMany
   */
  export type moduloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modulos.
     */
    data: XOR<moduloUpdateManyMutationInput, moduloUncheckedUpdateManyInput>
    /**
     * Filter which modulos to update
     */
    where?: moduloWhereInput
    /**
     * Limit how many modulos to update.
     */
    limit?: number
  }

  /**
   * modulo upsert
   */
  export type moduloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * The filter to search for the modulo to update in case it exists.
     */
    where: moduloWhereUniqueInput
    /**
     * In case the modulo found by the `where` argument doesn't exist, create a new modulo with this data.
     */
    create: XOR<moduloCreateInput, moduloUncheckedCreateInput>
    /**
     * In case the modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduloUpdateInput, moduloUncheckedUpdateInput>
  }

  /**
   * modulo delete
   */
  export type moduloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
    /**
     * Filter which modulo to delete.
     */
    where: moduloWhereUniqueInput
  }

  /**
   * modulo deleteMany
   */
  export type moduloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulos to delete
     */
    where?: moduloWhereInput
    /**
     * Limit how many modulos to delete.
     */
    limit?: number
  }

  /**
   * modulo.apostila
   */
  export type modulo$apostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apostila
     */
    select?: apostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apostila
     */
    omit?: apostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apostilaInclude<ExtArgs> | null
    where?: apostilaWhereInput
    orderBy?: apostilaOrderByWithRelationInput | apostilaOrderByWithRelationInput[]
    cursor?: apostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * modulo.avaliacao
   */
  export type modulo$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    where?: avaliacaoWhereInput
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    cursor?: avaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * modulo.video
   */
  export type modulo$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    where?: videoWhereInput
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    cursor?: videoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * modulo without action
   */
  export type moduloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulo
     */
    select?: moduloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulo
     */
    omit?: moduloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduloInclude<ExtArgs> | null
  }


  /**
   * Model parceria
   */

  export type AggregateParceria = {
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  export type ParceriaAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentualPlataforma: Decimal | null
  }

  export type ParceriaSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentualPlataforma: Decimal | null
  }

  export type ParceriaMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricaoProjeto: string | null
    percentualPlataforma: Decimal | null
    dataAssinatura: Date | null
    contratoUrl: string | null
  }

  export type ParceriaMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricaoProjeto: string | null
    percentualPlataforma: Decimal | null
    dataAssinatura: Date | null
    contratoUrl: string | null
  }

  export type ParceriaCountAggregateOutputType = {
    id: number
    alunoId: number
    descricaoProjeto: number
    percentualPlataforma: number
    dataAssinatura: number
    contratoUrl: number
    _all: number
  }


  export type ParceriaAvgAggregateInputType = {
    id?: true
    alunoId?: true
    percentualPlataforma?: true
  }

  export type ParceriaSumAggregateInputType = {
    id?: true
    alunoId?: true
    percentualPlataforma?: true
  }

  export type ParceriaMinAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
  }

  export type ParceriaMaxAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
  }

  export type ParceriaCountAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
    _all?: true
  }

  export type ParceriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parceria to aggregate.
     */
    where?: parceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcerias to fetch.
     */
    orderBy?: parceriaOrderByWithRelationInput | parceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parcerias
    **/
    _count?: true | ParceriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParceriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParceriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParceriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParceriaMaxAggregateInputType
  }

  export type GetParceriaAggregateType<T extends ParceriaAggregateArgs> = {
        [P in keyof T & keyof AggregateParceria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParceria[P]>
      : GetScalarType<T[P], AggregateParceria[P]>
  }




  export type parceriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parceriaWhereInput
    orderBy?: parceriaOrderByWithAggregationInput | parceriaOrderByWithAggregationInput[]
    by: ParceriaScalarFieldEnum[] | ParceriaScalarFieldEnum
    having?: parceriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParceriaCountAggregateInputType | true
    _avg?: ParceriaAvgAggregateInputType
    _sum?: ParceriaSumAggregateInputType
    _min?: ParceriaMinAggregateInputType
    _max?: ParceriaMaxAggregateInputType
  }

  export type ParceriaGroupByOutputType = {
    id: number
    alunoId: number
    descricaoProjeto: string | null
    percentualPlataforma: Decimal
    dataAssinatura: Date
    contratoUrl: string
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  type GetParceriaGroupByPayload<T extends parceriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParceriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParceriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
            : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
        }
      >
    >


  export type parceriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    descricaoProjeto?: boolean
    percentualPlataforma?: boolean
    dataAssinatura?: boolean
    contratoUrl?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parceria"]>



  export type parceriaSelectScalar = {
    id?: boolean
    alunoId?: boolean
    descricaoProjeto?: boolean
    percentualPlataforma?: boolean
    dataAssinatura?: boolean
    contratoUrl?: boolean
  }

  export type parceriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "descricaoProjeto" | "percentualPlataforma" | "dataAssinatura" | "contratoUrl", ExtArgs["result"]["parceria"]>
  export type parceriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $parceriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parceria"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      descricaoProjeto: string | null
      percentualPlataforma: Prisma.Decimal
      dataAssinatura: Date
      contratoUrl: string
    }, ExtArgs["result"]["parceria"]>
    composites: {}
  }

  type parceriaGetPayload<S extends boolean | null | undefined | parceriaDefaultArgs> = $Result.GetResult<Prisma.$parceriaPayload, S>

  type parceriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<parceriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParceriaCountAggregateInputType | true
    }

  export interface parceriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parceria'], meta: { name: 'parceria' } }
    /**
     * Find zero or one Parceria that matches the filter.
     * @param {parceriaFindUniqueArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends parceriaFindUniqueArgs>(args: SelectSubset<T, parceriaFindUniqueArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parceria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {parceriaFindUniqueOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends parceriaFindUniqueOrThrowArgs>(args: SelectSubset<T, parceriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaFindFirstArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends parceriaFindFirstArgs>(args?: SelectSubset<T, parceriaFindFirstArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaFindFirstOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends parceriaFindFirstOrThrowArgs>(args?: SelectSubset<T, parceriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcerias
     * const parcerias = await prisma.parceria.findMany()
     * 
     * // Get first 10 Parcerias
     * const parcerias = await prisma.parceria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parceriaWithIdOnly = await prisma.parceria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends parceriaFindManyArgs>(args?: SelectSubset<T, parceriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parceria.
     * @param {parceriaCreateArgs} args - Arguments to create a Parceria.
     * @example
     * // Create one Parceria
     * const Parceria = await prisma.parceria.create({
     *   data: {
     *     // ... data to create a Parceria
     *   }
     * })
     * 
     */
    create<T extends parceriaCreateArgs>(args: SelectSubset<T, parceriaCreateArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcerias.
     * @param {parceriaCreateManyArgs} args - Arguments to create many Parcerias.
     * @example
     * // Create many Parcerias
     * const parceria = await prisma.parceria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends parceriaCreateManyArgs>(args?: SelectSubset<T, parceriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parceria.
     * @param {parceriaDeleteArgs} args - Arguments to delete one Parceria.
     * @example
     * // Delete one Parceria
     * const Parceria = await prisma.parceria.delete({
     *   where: {
     *     // ... filter to delete one Parceria
     *   }
     * })
     * 
     */
    delete<T extends parceriaDeleteArgs>(args: SelectSubset<T, parceriaDeleteArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parceria.
     * @param {parceriaUpdateArgs} args - Arguments to update one Parceria.
     * @example
     * // Update one Parceria
     * const parceria = await prisma.parceria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends parceriaUpdateArgs>(args: SelectSubset<T, parceriaUpdateArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcerias.
     * @param {parceriaDeleteManyArgs} args - Arguments to filter Parcerias to delete.
     * @example
     * // Delete a few Parcerias
     * const { count } = await prisma.parceria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends parceriaDeleteManyArgs>(args?: SelectSubset<T, parceriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcerias
     * const parceria = await prisma.parceria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends parceriaUpdateManyArgs>(args: SelectSubset<T, parceriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parceria.
     * @param {parceriaUpsertArgs} args - Arguments to update or create a Parceria.
     * @example
     * // Update or create a Parceria
     * const parceria = await prisma.parceria.upsert({
     *   create: {
     *     // ... data to create a Parceria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parceria we want to update
     *   }
     * })
     */
    upsert<T extends parceriaUpsertArgs>(args: SelectSubset<T, parceriaUpsertArgs<ExtArgs>>): Prisma__parceriaClient<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaCountArgs} args - Arguments to filter Parcerias to count.
     * @example
     * // Count the number of Parcerias
     * const count = await prisma.parceria.count({
     *   where: {
     *     // ... the filter for the Parcerias we want to count
     *   }
     * })
    **/
    count<T extends parceriaCountArgs>(
      args?: Subset<T, parceriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParceriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParceriaAggregateArgs>(args: Subset<T, ParceriaAggregateArgs>): Prisma.PrismaPromise<GetParceriaAggregateType<T>>

    /**
     * Group by Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parceriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends parceriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parceriaGroupByArgs['orderBy'] }
        : { orderBy?: parceriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, parceriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParceriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parceria model
   */
  readonly fields: parceriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parceria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parceriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the parceria model
   */
  interface parceriaFieldRefs {
    readonly id: FieldRef<"parceria", 'Int'>
    readonly alunoId: FieldRef<"parceria", 'Int'>
    readonly descricaoProjeto: FieldRef<"parceria", 'String'>
    readonly percentualPlataforma: FieldRef<"parceria", 'Decimal'>
    readonly dataAssinatura: FieldRef<"parceria", 'DateTime'>
    readonly contratoUrl: FieldRef<"parceria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * parceria findUnique
   */
  export type parceriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter, which parceria to fetch.
     */
    where: parceriaWhereUniqueInput
  }

  /**
   * parceria findUniqueOrThrow
   */
  export type parceriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter, which parceria to fetch.
     */
    where: parceriaWhereUniqueInput
  }

  /**
   * parceria findFirst
   */
  export type parceriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter, which parceria to fetch.
     */
    where?: parceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcerias to fetch.
     */
    orderBy?: parceriaOrderByWithRelationInput | parceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parcerias.
     */
    cursor?: parceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * parceria findFirstOrThrow
   */
  export type parceriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter, which parceria to fetch.
     */
    where?: parceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcerias to fetch.
     */
    orderBy?: parceriaOrderByWithRelationInput | parceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parcerias.
     */
    cursor?: parceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * parceria findMany
   */
  export type parceriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter, which parcerias to fetch.
     */
    where?: parceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcerias to fetch.
     */
    orderBy?: parceriaOrderByWithRelationInput | parceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parcerias.
     */
    cursor?: parceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcerias.
     */
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * parceria create
   */
  export type parceriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * The data needed to create a parceria.
     */
    data: XOR<parceriaCreateInput, parceriaUncheckedCreateInput>
  }

  /**
   * parceria createMany
   */
  export type parceriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parcerias.
     */
    data: parceriaCreateManyInput | parceriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parceria update
   */
  export type parceriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * The data needed to update a parceria.
     */
    data: XOR<parceriaUpdateInput, parceriaUncheckedUpdateInput>
    /**
     * Choose, which parceria to update.
     */
    where: parceriaWhereUniqueInput
  }

  /**
   * parceria updateMany
   */
  export type parceriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parcerias.
     */
    data: XOR<parceriaUpdateManyMutationInput, parceriaUncheckedUpdateManyInput>
    /**
     * Filter which parcerias to update
     */
    where?: parceriaWhereInput
    /**
     * Limit how many parcerias to update.
     */
    limit?: number
  }

  /**
   * parceria upsert
   */
  export type parceriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * The filter to search for the parceria to update in case it exists.
     */
    where: parceriaWhereUniqueInput
    /**
     * In case the parceria found by the `where` argument doesn't exist, create a new parceria with this data.
     */
    create: XOR<parceriaCreateInput, parceriaUncheckedCreateInput>
    /**
     * In case the parceria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parceriaUpdateInput, parceriaUncheckedUpdateInput>
  }

  /**
   * parceria delete
   */
  export type parceriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    /**
     * Filter which parceria to delete.
     */
    where: parceriaWhereUniqueInput
  }

  /**
   * parceria deleteMany
   */
  export type parceriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parcerias to delete
     */
    where?: parceriaWhereInput
    /**
     * Limit how many parcerias to delete.
     */
    limit?: number
  }

  /**
   * parceria without action
   */
  export type parceriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
  }


  /**
   * Model plano
   */

  export type AggregatePlano = {
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  export type PlanoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type PlanoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type PlanoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: Decimal | null
  }

  export type PlanoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: Decimal | null
  }

  export type PlanoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valor: number
    _all: number
  }


  export type PlanoAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type PlanoSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type PlanoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
  }

  export type PlanoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
  }

  export type PlanoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    _all?: true
  }

  export type PlanoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plano to aggregate.
     */
    where?: planoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planoOrderByWithRelationInput | planoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planos
    **/
    _count?: true | PlanoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanoMaxAggregateInputType
  }

  export type GetPlanoAggregateType<T extends PlanoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlano]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlano[P]>
      : GetScalarType<T[P], AggregatePlano[P]>
  }




  export type planoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planoWhereInput
    orderBy?: planoOrderByWithAggregationInput | planoOrderByWithAggregationInput[]
    by: PlanoScalarFieldEnum[] | PlanoScalarFieldEnum
    having?: planoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanoCountAggregateInputType | true
    _avg?: PlanoAvgAggregateInputType
    _sum?: PlanoSumAggregateInputType
    _min?: PlanoMinAggregateInputType
    _max?: PlanoMaxAggregateInputType
  }

  export type PlanoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    valor: Decimal
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  type GetPlanoGroupByPayload<T extends planoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanoGroupByOutputType[P]>
        }
      >
    >


  export type planoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    usuario?: boolean | plano$usuarioArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plano"]>



  export type planoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
  }

  export type planoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "valor", ExtArgs["result"]["plano"]>
  export type planoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | plano$usuarioArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $planoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plano"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      valor: Prisma.Decimal
    }, ExtArgs["result"]["plano"]>
    composites: {}
  }

  type planoGetPayload<S extends boolean | null | undefined | planoDefaultArgs> = $Result.GetResult<Prisma.$planoPayload, S>

  type planoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<planoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanoCountAggregateInputType | true
    }

  export interface planoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plano'], meta: { name: 'plano' } }
    /**
     * Find zero or one Plano that matches the filter.
     * @param {planoFindUniqueArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends planoFindUniqueArgs>(args: SelectSubset<T, planoFindUniqueArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plano that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {planoFindUniqueOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends planoFindUniqueOrThrowArgs>(args: SelectSubset<T, planoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoFindFirstArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends planoFindFirstArgs>(args?: SelectSubset<T, planoFindFirstArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoFindFirstOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends planoFindFirstOrThrowArgs>(args?: SelectSubset<T, planoFindFirstOrThrowArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planos
     * const planos = await prisma.plano.findMany()
     * 
     * // Get first 10 Planos
     * const planos = await prisma.plano.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planoWithIdOnly = await prisma.plano.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends planoFindManyArgs>(args?: SelectSubset<T, planoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plano.
     * @param {planoCreateArgs} args - Arguments to create a Plano.
     * @example
     * // Create one Plano
     * const Plano = await prisma.plano.create({
     *   data: {
     *     // ... data to create a Plano
     *   }
     * })
     * 
     */
    create<T extends planoCreateArgs>(args: SelectSubset<T, planoCreateArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planos.
     * @param {planoCreateManyArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const plano = await prisma.plano.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends planoCreateManyArgs>(args?: SelectSubset<T, planoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plano.
     * @param {planoDeleteArgs} args - Arguments to delete one Plano.
     * @example
     * // Delete one Plano
     * const Plano = await prisma.plano.delete({
     *   where: {
     *     // ... filter to delete one Plano
     *   }
     * })
     * 
     */
    delete<T extends planoDeleteArgs>(args: SelectSubset<T, planoDeleteArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plano.
     * @param {planoUpdateArgs} args - Arguments to update one Plano.
     * @example
     * // Update one Plano
     * const plano = await prisma.plano.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends planoUpdateArgs>(args: SelectSubset<T, planoUpdateArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planos.
     * @param {planoDeleteManyArgs} args - Arguments to filter Planos to delete.
     * @example
     * // Delete a few Planos
     * const { count } = await prisma.plano.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends planoDeleteManyArgs>(args?: SelectSubset<T, planoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planos
     * const plano = await prisma.plano.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends planoUpdateManyArgs>(args: SelectSubset<T, planoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plano.
     * @param {planoUpsertArgs} args - Arguments to update or create a Plano.
     * @example
     * // Update or create a Plano
     * const plano = await prisma.plano.upsert({
     *   create: {
     *     // ... data to create a Plano
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plano we want to update
     *   }
     * })
     */
    upsert<T extends planoUpsertArgs>(args: SelectSubset<T, planoUpsertArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoCountArgs} args - Arguments to filter Planos to count.
     * @example
     * // Count the number of Planos
     * const count = await prisma.plano.count({
     *   where: {
     *     // ... the filter for the Planos we want to count
     *   }
     * })
    **/
    count<T extends planoCountArgs>(
      args?: Subset<T, planoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanoAggregateArgs>(args: Subset<T, PlanoAggregateArgs>): Prisma.PrismaPromise<GetPlanoAggregateType<T>>

    /**
     * Group by Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends planoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planoGroupByArgs['orderBy'] }
        : { orderBy?: planoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, planoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plano model
   */
  readonly fields: planoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plano.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__planoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends plano$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, plano$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plano model
   */
  interface planoFieldRefs {
    readonly id: FieldRef<"plano", 'Int'>
    readonly nome: FieldRef<"plano", 'String'>
    readonly descricao: FieldRef<"plano", 'String'>
    readonly valor: FieldRef<"plano", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * plano findUnique
   */
  export type planoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter, which plano to fetch.
     */
    where: planoWhereUniqueInput
  }

  /**
   * plano findUniqueOrThrow
   */
  export type planoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter, which plano to fetch.
     */
    where: planoWhereUniqueInput
  }

  /**
   * plano findFirst
   */
  export type planoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter, which plano to fetch.
     */
    where?: planoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planoOrderByWithRelationInput | planoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planos.
     */
    cursor?: planoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * plano findFirstOrThrow
   */
  export type planoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter, which plano to fetch.
     */
    where?: planoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planoOrderByWithRelationInput | planoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planos.
     */
    cursor?: planoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * plano findMany
   */
  export type planoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where?: planoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planoOrderByWithRelationInput | planoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planos.
     */
    cursor?: planoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * plano create
   */
  export type planoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * The data needed to create a plano.
     */
    data: XOR<planoCreateInput, planoUncheckedCreateInput>
  }

  /**
   * plano createMany
   */
  export type planoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planos.
     */
    data: planoCreateManyInput | planoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plano update
   */
  export type planoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * The data needed to update a plano.
     */
    data: XOR<planoUpdateInput, planoUncheckedUpdateInput>
    /**
     * Choose, which plano to update.
     */
    where: planoWhereUniqueInput
  }

  /**
   * plano updateMany
   */
  export type planoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planos.
     */
    data: XOR<planoUpdateManyMutationInput, planoUncheckedUpdateManyInput>
    /**
     * Filter which planos to update
     */
    where?: planoWhereInput
    /**
     * Limit how many planos to update.
     */
    limit?: number
  }

  /**
   * plano upsert
   */
  export type planoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * The filter to search for the plano to update in case it exists.
     */
    where: planoWhereUniqueInput
    /**
     * In case the plano found by the `where` argument doesn't exist, create a new plano with this data.
     */
    create: XOR<planoCreateInput, planoUncheckedCreateInput>
    /**
     * In case the plano was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planoUpdateInput, planoUncheckedUpdateInput>
  }

  /**
   * plano delete
   */
  export type planoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    /**
     * Filter which plano to delete.
     */
    where: planoWhereUniqueInput
  }

  /**
   * plano deleteMany
   */
  export type planoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which planos to delete
     */
    where?: planoWhereInput
    /**
     * Limit how many planos to delete.
     */
    limit?: number
  }

  /**
   * plano.usuario
   */
  export type plano$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * plano without action
   */
  export type planoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
  }


  /**
   * Model progressoapostila
   */

  export type AggregateProgressoapostila = {
    _count: ProgressoapostilaCountAggregateOutputType | null
    _avg: ProgressoapostilaAvgAggregateOutputType | null
    _sum: ProgressoapostilaSumAggregateOutputType | null
    _min: ProgressoapostilaMinAggregateOutputType | null
    _max: ProgressoapostilaMaxAggregateOutputType | null
  }

  export type ProgressoapostilaAvgAggregateOutputType = {
    alunoId: number | null
    apostilaId: number | null
  }

  export type ProgressoapostilaSumAggregateOutputType = {
    alunoId: number | null
    apostilaId: number | null
  }

  export type ProgressoapostilaMinAggregateOutputType = {
    alunoId: number | null
    apostilaId: number | null
    baixouApostila: boolean | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoapostilaMaxAggregateOutputType = {
    alunoId: number | null
    apostilaId: number | null
    baixouApostila: boolean | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoapostilaCountAggregateOutputType = {
    alunoId: number
    apostilaId: number
    baixouApostila: number
    dataUltimaInteracao: number
    _all: number
  }


  export type ProgressoapostilaAvgAggregateInputType = {
    alunoId?: true
    apostilaId?: true
  }

  export type ProgressoapostilaSumAggregateInputType = {
    alunoId?: true
    apostilaId?: true
  }

  export type ProgressoapostilaMinAggregateInputType = {
    alunoId?: true
    apostilaId?: true
    baixouApostila?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoapostilaMaxAggregateInputType = {
    alunoId?: true
    apostilaId?: true
    baixouApostila?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoapostilaCountAggregateInputType = {
    alunoId?: true
    apostilaId?: true
    baixouApostila?: true
    dataUltimaInteracao?: true
    _all?: true
  }

  export type ProgressoapostilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressoapostila to aggregate.
     */
    where?: progressoapostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoapostilas to fetch.
     */
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progressoapostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoapostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoapostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progressoapostilas
    **/
    _count?: true | ProgressoapostilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoapostilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoapostilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoapostilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoapostilaMaxAggregateInputType
  }

  export type GetProgressoapostilaAggregateType<T extends ProgressoapostilaAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoapostila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoapostila[P]>
      : GetScalarType<T[P], AggregateProgressoapostila[P]>
  }




  export type progressoapostilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoapostilaWhereInput
    orderBy?: progressoapostilaOrderByWithAggregationInput | progressoapostilaOrderByWithAggregationInput[]
    by: ProgressoapostilaScalarFieldEnum[] | ProgressoapostilaScalarFieldEnum
    having?: progressoapostilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoapostilaCountAggregateInputType | true
    _avg?: ProgressoapostilaAvgAggregateInputType
    _sum?: ProgressoapostilaSumAggregateInputType
    _min?: ProgressoapostilaMinAggregateInputType
    _max?: ProgressoapostilaMaxAggregateInputType
  }

  export type ProgressoapostilaGroupByOutputType = {
    alunoId: number
    apostilaId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date
    _count: ProgressoapostilaCountAggregateOutputType | null
    _avg: ProgressoapostilaAvgAggregateOutputType | null
    _sum: ProgressoapostilaSumAggregateOutputType | null
    _min: ProgressoapostilaMinAggregateOutputType | null
    _max: ProgressoapostilaMaxAggregateOutputType | null
  }

  type GetProgressoapostilaGroupByPayload<T extends progressoapostilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoapostilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoapostilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoapostilaGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoapostilaGroupByOutputType[P]>
        }
      >
    >


  export type progressoapostilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    apostilaId?: boolean
    baixouApostila?: boolean
    dataUltimaInteracao?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    apostila?: boolean | apostilaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoapostila"]>



  export type progressoapostilaSelectScalar = {
    alunoId?: boolean
    apostilaId?: boolean
    baixouApostila?: boolean
    dataUltimaInteracao?: boolean
  }

  export type progressoapostilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "apostilaId" | "baixouApostila" | "dataUltimaInteracao", ExtArgs["result"]["progressoapostila"]>
  export type progressoapostilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    apostila?: boolean | apostilaDefaultArgs<ExtArgs>
  }

  export type $progressoapostilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progressoapostila"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      apostila: Prisma.$apostilaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      apostilaId: number
      baixouApostila: boolean
      dataUltimaInteracao: Date
    }, ExtArgs["result"]["progressoapostila"]>
    composites: {}
  }

  type progressoapostilaGetPayload<S extends boolean | null | undefined | progressoapostilaDefaultArgs> = $Result.GetResult<Prisma.$progressoapostilaPayload, S>

  type progressoapostilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progressoapostilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoapostilaCountAggregateInputType | true
    }

  export interface progressoapostilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progressoapostila'], meta: { name: 'progressoapostila' } }
    /**
     * Find zero or one Progressoapostila that matches the filter.
     * @param {progressoapostilaFindUniqueArgs} args - Arguments to find a Progressoapostila
     * @example
     * // Get one Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progressoapostilaFindUniqueArgs>(args: SelectSubset<T, progressoapostilaFindUniqueArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progressoapostila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progressoapostilaFindUniqueOrThrowArgs} args - Arguments to find a Progressoapostila
     * @example
     * // Get one Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progressoapostilaFindUniqueOrThrowArgs>(args: SelectSubset<T, progressoapostilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressoapostila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaFindFirstArgs} args - Arguments to find a Progressoapostila
     * @example
     * // Get one Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progressoapostilaFindFirstArgs>(args?: SelectSubset<T, progressoapostilaFindFirstArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressoapostila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaFindFirstOrThrowArgs} args - Arguments to find a Progressoapostila
     * @example
     * // Get one Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progressoapostilaFindFirstOrThrowArgs>(args?: SelectSubset<T, progressoapostilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progressoapostilas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progressoapostilas
     * const progressoapostilas = await prisma.progressoapostila.findMany()
     * 
     * // Get first 10 Progressoapostilas
     * const progressoapostilas = await prisma.progressoapostila.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const progressoapostilaWithAlunoIdOnly = await prisma.progressoapostila.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends progressoapostilaFindManyArgs>(args?: SelectSubset<T, progressoapostilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progressoapostila.
     * @param {progressoapostilaCreateArgs} args - Arguments to create a Progressoapostila.
     * @example
     * // Create one Progressoapostila
     * const Progressoapostila = await prisma.progressoapostila.create({
     *   data: {
     *     // ... data to create a Progressoapostila
     *   }
     * })
     * 
     */
    create<T extends progressoapostilaCreateArgs>(args: SelectSubset<T, progressoapostilaCreateArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progressoapostilas.
     * @param {progressoapostilaCreateManyArgs} args - Arguments to create many Progressoapostilas.
     * @example
     * // Create many Progressoapostilas
     * const progressoapostila = await prisma.progressoapostila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progressoapostilaCreateManyArgs>(args?: SelectSubset<T, progressoapostilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progressoapostila.
     * @param {progressoapostilaDeleteArgs} args - Arguments to delete one Progressoapostila.
     * @example
     * // Delete one Progressoapostila
     * const Progressoapostila = await prisma.progressoapostila.delete({
     *   where: {
     *     // ... filter to delete one Progressoapostila
     *   }
     * })
     * 
     */
    delete<T extends progressoapostilaDeleteArgs>(args: SelectSubset<T, progressoapostilaDeleteArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progressoapostila.
     * @param {progressoapostilaUpdateArgs} args - Arguments to update one Progressoapostila.
     * @example
     * // Update one Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progressoapostilaUpdateArgs>(args: SelectSubset<T, progressoapostilaUpdateArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progressoapostilas.
     * @param {progressoapostilaDeleteManyArgs} args - Arguments to filter Progressoapostilas to delete.
     * @example
     * // Delete a few Progressoapostilas
     * const { count } = await prisma.progressoapostila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progressoapostilaDeleteManyArgs>(args?: SelectSubset<T, progressoapostilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progressoapostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progressoapostilas
     * const progressoapostila = await prisma.progressoapostila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progressoapostilaUpdateManyArgs>(args: SelectSubset<T, progressoapostilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progressoapostila.
     * @param {progressoapostilaUpsertArgs} args - Arguments to update or create a Progressoapostila.
     * @example
     * // Update or create a Progressoapostila
     * const progressoapostila = await prisma.progressoapostila.upsert({
     *   create: {
     *     // ... data to create a Progressoapostila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progressoapostila we want to update
     *   }
     * })
     */
    upsert<T extends progressoapostilaUpsertArgs>(args: SelectSubset<T, progressoapostilaUpsertArgs<ExtArgs>>): Prisma__progressoapostilaClient<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progressoapostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaCountArgs} args - Arguments to filter Progressoapostilas to count.
     * @example
     * // Count the number of Progressoapostilas
     * const count = await prisma.progressoapostila.count({
     *   where: {
     *     // ... the filter for the Progressoapostilas we want to count
     *   }
     * })
    **/
    count<T extends progressoapostilaCountArgs>(
      args?: Subset<T, progressoapostilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoapostilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progressoapostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoapostilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressoapostilaAggregateArgs>(args: Subset<T, ProgressoapostilaAggregateArgs>): Prisma.PrismaPromise<GetProgressoapostilaAggregateType<T>>

    /**
     * Group by Progressoapostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoapostilaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progressoapostilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progressoapostilaGroupByArgs['orderBy'] }
        : { orderBy?: progressoapostilaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progressoapostilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoapostilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progressoapostila model
   */
  readonly fields: progressoapostilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progressoapostila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progressoapostilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apostila<T extends apostilaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, apostilaDefaultArgs<ExtArgs>>): Prisma__apostilaClient<$Result.GetResult<Prisma.$apostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the progressoapostila model
   */
  interface progressoapostilaFieldRefs {
    readonly alunoId: FieldRef<"progressoapostila", 'Int'>
    readonly apostilaId: FieldRef<"progressoapostila", 'Int'>
    readonly baixouApostila: FieldRef<"progressoapostila", 'Boolean'>
    readonly dataUltimaInteracao: FieldRef<"progressoapostila", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * progressoapostila findUnique
   */
  export type progressoapostilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter, which progressoapostila to fetch.
     */
    where: progressoapostilaWhereUniqueInput
  }

  /**
   * progressoapostila findUniqueOrThrow
   */
  export type progressoapostilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter, which progressoapostila to fetch.
     */
    where: progressoapostilaWhereUniqueInput
  }

  /**
   * progressoapostila findFirst
   */
  export type progressoapostilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter, which progressoapostila to fetch.
     */
    where?: progressoapostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoapostilas to fetch.
     */
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressoapostilas.
     */
    cursor?: progressoapostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoapostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoapostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressoapostilas.
     */
    distinct?: ProgressoapostilaScalarFieldEnum | ProgressoapostilaScalarFieldEnum[]
  }

  /**
   * progressoapostila findFirstOrThrow
   */
  export type progressoapostilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter, which progressoapostila to fetch.
     */
    where?: progressoapostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoapostilas to fetch.
     */
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressoapostilas.
     */
    cursor?: progressoapostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoapostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoapostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressoapostilas.
     */
    distinct?: ProgressoapostilaScalarFieldEnum | ProgressoapostilaScalarFieldEnum[]
  }

  /**
   * progressoapostila findMany
   */
  export type progressoapostilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter, which progressoapostilas to fetch.
     */
    where?: progressoapostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoapostilas to fetch.
     */
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progressoapostilas.
     */
    cursor?: progressoapostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoapostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoapostilas.
     */
    skip?: number
    distinct?: ProgressoapostilaScalarFieldEnum | ProgressoapostilaScalarFieldEnum[]
  }

  /**
   * progressoapostila create
   */
  export type progressoapostilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * The data needed to create a progressoapostila.
     */
    data: XOR<progressoapostilaCreateInput, progressoapostilaUncheckedCreateInput>
  }

  /**
   * progressoapostila createMany
   */
  export type progressoapostilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progressoapostilas.
     */
    data: progressoapostilaCreateManyInput | progressoapostilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progressoapostila update
   */
  export type progressoapostilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * The data needed to update a progressoapostila.
     */
    data: XOR<progressoapostilaUpdateInput, progressoapostilaUncheckedUpdateInput>
    /**
     * Choose, which progressoapostila to update.
     */
    where: progressoapostilaWhereUniqueInput
  }

  /**
   * progressoapostila updateMany
   */
  export type progressoapostilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progressoapostilas.
     */
    data: XOR<progressoapostilaUpdateManyMutationInput, progressoapostilaUncheckedUpdateManyInput>
    /**
     * Filter which progressoapostilas to update
     */
    where?: progressoapostilaWhereInput
    /**
     * Limit how many progressoapostilas to update.
     */
    limit?: number
  }

  /**
   * progressoapostila upsert
   */
  export type progressoapostilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * The filter to search for the progressoapostila to update in case it exists.
     */
    where: progressoapostilaWhereUniqueInput
    /**
     * In case the progressoapostila found by the `where` argument doesn't exist, create a new progressoapostila with this data.
     */
    create: XOR<progressoapostilaCreateInput, progressoapostilaUncheckedCreateInput>
    /**
     * In case the progressoapostila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progressoapostilaUpdateInput, progressoapostilaUncheckedUpdateInput>
  }

  /**
   * progressoapostila delete
   */
  export type progressoapostilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    /**
     * Filter which progressoapostila to delete.
     */
    where: progressoapostilaWhereUniqueInput
  }

  /**
   * progressoapostila deleteMany
   */
  export type progressoapostilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressoapostilas to delete
     */
    where?: progressoapostilaWhereInput
    /**
     * Limit how many progressoapostilas to delete.
     */
    limit?: number
  }

  /**
   * progressoapostila without action
   */
  export type progressoapostilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
  }


  /**
   * Model progressoavaliacao
   */

  export type AggregateProgressoavaliacao = {
    _count: ProgressoavaliacaoCountAggregateOutputType | null
    _avg: ProgressoavaliacaoAvgAggregateOutputType | null
    _sum: ProgressoavaliacaoSumAggregateOutputType | null
    _min: ProgressoavaliacaoMinAggregateOutputType | null
    _max: ProgressoavaliacaoMaxAggregateOutputType | null
  }

  export type ProgressoavaliacaoAvgAggregateOutputType = {
    alunoId: number | null
    avaliacaoId: number | null
    notaAvaliacao: Decimal | null
  }

  export type ProgressoavaliacaoSumAggregateOutputType = {
    alunoId: number | null
    avaliacaoId: number | null
    notaAvaliacao: Decimal | null
  }

  export type ProgressoavaliacaoMinAggregateOutputType = {
    alunoId: number | null
    avaliacaoId: number | null
    notaAvaliacao: Decimal | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoavaliacaoMaxAggregateOutputType = {
    alunoId: number | null
    avaliacaoId: number | null
    notaAvaliacao: Decimal | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoavaliacaoCountAggregateOutputType = {
    alunoId: number
    avaliacaoId: number
    notaAvaliacao: number
    dataUltimaInteracao: number
    _all: number
  }


  export type ProgressoavaliacaoAvgAggregateInputType = {
    alunoId?: true
    avaliacaoId?: true
    notaAvaliacao?: true
  }

  export type ProgressoavaliacaoSumAggregateInputType = {
    alunoId?: true
    avaliacaoId?: true
    notaAvaliacao?: true
  }

  export type ProgressoavaliacaoMinAggregateInputType = {
    alunoId?: true
    avaliacaoId?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoavaliacaoMaxAggregateInputType = {
    alunoId?: true
    avaliacaoId?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoavaliacaoCountAggregateInputType = {
    alunoId?: true
    avaliacaoId?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
    _all?: true
  }

  export type ProgressoavaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressoavaliacao to aggregate.
     */
    where?: progressoavaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoavaliacaos to fetch.
     */
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progressoavaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoavaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoavaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progressoavaliacaos
    **/
    _count?: true | ProgressoavaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoavaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoavaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoavaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoavaliacaoMaxAggregateInputType
  }

  export type GetProgressoavaliacaoAggregateType<T extends ProgressoavaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoavaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoavaliacao[P]>
      : GetScalarType<T[P], AggregateProgressoavaliacao[P]>
  }




  export type progressoavaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressoavaliacaoWhereInput
    orderBy?: progressoavaliacaoOrderByWithAggregationInput | progressoavaliacaoOrderByWithAggregationInput[]
    by: ProgressoavaliacaoScalarFieldEnum[] | ProgressoavaliacaoScalarFieldEnum
    having?: progressoavaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoavaliacaoCountAggregateInputType | true
    _avg?: ProgressoavaliacaoAvgAggregateInputType
    _sum?: ProgressoavaliacaoSumAggregateInputType
    _min?: ProgressoavaliacaoMinAggregateInputType
    _max?: ProgressoavaliacaoMaxAggregateInputType
  }

  export type ProgressoavaliacaoGroupByOutputType = {
    alunoId: number
    avaliacaoId: number
    notaAvaliacao: Decimal
    dataUltimaInteracao: Date
    _count: ProgressoavaliacaoCountAggregateOutputType | null
    _avg: ProgressoavaliacaoAvgAggregateOutputType | null
    _sum: ProgressoavaliacaoSumAggregateOutputType | null
    _min: ProgressoavaliacaoMinAggregateOutputType | null
    _max: ProgressoavaliacaoMaxAggregateOutputType | null
  }

  type GetProgressoavaliacaoGroupByPayload<T extends progressoavaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoavaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoavaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoavaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoavaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type progressoavaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    avaliacaoId?: boolean
    notaAvaliacao?: boolean
    dataUltimaInteracao?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    avaliacao?: boolean | avaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoavaliacao"]>



  export type progressoavaliacaoSelectScalar = {
    alunoId?: boolean
    avaliacaoId?: boolean
    notaAvaliacao?: boolean
    dataUltimaInteracao?: boolean
  }

  export type progressoavaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "avaliacaoId" | "notaAvaliacao" | "dataUltimaInteracao", ExtArgs["result"]["progressoavaliacao"]>
  export type progressoavaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    avaliacao?: boolean | avaliacaoDefaultArgs<ExtArgs>
  }

  export type $progressoavaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progressoavaliacao"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      avaliacao: Prisma.$avaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      avaliacaoId: number
      notaAvaliacao: Prisma.Decimal
      dataUltimaInteracao: Date
    }, ExtArgs["result"]["progressoavaliacao"]>
    composites: {}
  }

  type progressoavaliacaoGetPayload<S extends boolean | null | undefined | progressoavaliacaoDefaultArgs> = $Result.GetResult<Prisma.$progressoavaliacaoPayload, S>

  type progressoavaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progressoavaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoavaliacaoCountAggregateInputType | true
    }

  export interface progressoavaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progressoavaliacao'], meta: { name: 'progressoavaliacao' } }
    /**
     * Find zero or one Progressoavaliacao that matches the filter.
     * @param {progressoavaliacaoFindUniqueArgs} args - Arguments to find a Progressoavaliacao
     * @example
     * // Get one Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progressoavaliacaoFindUniqueArgs>(args: SelectSubset<T, progressoavaliacaoFindUniqueArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progressoavaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progressoavaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Progressoavaliacao
     * @example
     * // Get one Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progressoavaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, progressoavaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressoavaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoFindFirstArgs} args - Arguments to find a Progressoavaliacao
     * @example
     * // Get one Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progressoavaliacaoFindFirstArgs>(args?: SelectSubset<T, progressoavaliacaoFindFirstArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressoavaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoFindFirstOrThrowArgs} args - Arguments to find a Progressoavaliacao
     * @example
     * // Get one Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progressoavaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, progressoavaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progressoavaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progressoavaliacaos
     * const progressoavaliacaos = await prisma.progressoavaliacao.findMany()
     * 
     * // Get first 10 Progressoavaliacaos
     * const progressoavaliacaos = await prisma.progressoavaliacao.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const progressoavaliacaoWithAlunoIdOnly = await prisma.progressoavaliacao.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends progressoavaliacaoFindManyArgs>(args?: SelectSubset<T, progressoavaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progressoavaliacao.
     * @param {progressoavaliacaoCreateArgs} args - Arguments to create a Progressoavaliacao.
     * @example
     * // Create one Progressoavaliacao
     * const Progressoavaliacao = await prisma.progressoavaliacao.create({
     *   data: {
     *     // ... data to create a Progressoavaliacao
     *   }
     * })
     * 
     */
    create<T extends progressoavaliacaoCreateArgs>(args: SelectSubset<T, progressoavaliacaoCreateArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progressoavaliacaos.
     * @param {progressoavaliacaoCreateManyArgs} args - Arguments to create many Progressoavaliacaos.
     * @example
     * // Create many Progressoavaliacaos
     * const progressoavaliacao = await prisma.progressoavaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progressoavaliacaoCreateManyArgs>(args?: SelectSubset<T, progressoavaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progressoavaliacao.
     * @param {progressoavaliacaoDeleteArgs} args - Arguments to delete one Progressoavaliacao.
     * @example
     * // Delete one Progressoavaliacao
     * const Progressoavaliacao = await prisma.progressoavaliacao.delete({
     *   where: {
     *     // ... filter to delete one Progressoavaliacao
     *   }
     * })
     * 
     */
    delete<T extends progressoavaliacaoDeleteArgs>(args: SelectSubset<T, progressoavaliacaoDeleteArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progressoavaliacao.
     * @param {progressoavaliacaoUpdateArgs} args - Arguments to update one Progressoavaliacao.
     * @example
     * // Update one Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progressoavaliacaoUpdateArgs>(args: SelectSubset<T, progressoavaliacaoUpdateArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progressoavaliacaos.
     * @param {progressoavaliacaoDeleteManyArgs} args - Arguments to filter Progressoavaliacaos to delete.
     * @example
     * // Delete a few Progressoavaliacaos
     * const { count } = await prisma.progressoavaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progressoavaliacaoDeleteManyArgs>(args?: SelectSubset<T, progressoavaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progressoavaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progressoavaliacaos
     * const progressoavaliacao = await prisma.progressoavaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progressoavaliacaoUpdateManyArgs>(args: SelectSubset<T, progressoavaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progressoavaliacao.
     * @param {progressoavaliacaoUpsertArgs} args - Arguments to update or create a Progressoavaliacao.
     * @example
     * // Update or create a Progressoavaliacao
     * const progressoavaliacao = await prisma.progressoavaliacao.upsert({
     *   create: {
     *     // ... data to create a Progressoavaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progressoavaliacao we want to update
     *   }
     * })
     */
    upsert<T extends progressoavaliacaoUpsertArgs>(args: SelectSubset<T, progressoavaliacaoUpsertArgs<ExtArgs>>): Prisma__progressoavaliacaoClient<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progressoavaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoCountArgs} args - Arguments to filter Progressoavaliacaos to count.
     * @example
     * // Count the number of Progressoavaliacaos
     * const count = await prisma.progressoavaliacao.count({
     *   where: {
     *     // ... the filter for the Progressoavaliacaos we want to count
     *   }
     * })
    **/
    count<T extends progressoavaliacaoCountArgs>(
      args?: Subset<T, progressoavaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoavaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progressoavaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoavaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressoavaliacaoAggregateArgs>(args: Subset<T, ProgressoavaliacaoAggregateArgs>): Prisma.PrismaPromise<GetProgressoavaliacaoAggregateType<T>>

    /**
     * Group by Progressoavaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressoavaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progressoavaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progressoavaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: progressoavaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progressoavaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoavaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progressoavaliacao model
   */
  readonly fields: progressoavaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progressoavaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progressoavaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends avaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, avaliacaoDefaultArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the progressoavaliacao model
   */
  interface progressoavaliacaoFieldRefs {
    readonly alunoId: FieldRef<"progressoavaliacao", 'Int'>
    readonly avaliacaoId: FieldRef<"progressoavaliacao", 'Int'>
    readonly notaAvaliacao: FieldRef<"progressoavaliacao", 'Decimal'>
    readonly dataUltimaInteracao: FieldRef<"progressoavaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * progressoavaliacao findUnique
   */
  export type progressoavaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which progressoavaliacao to fetch.
     */
    where: progressoavaliacaoWhereUniqueInput
  }

  /**
   * progressoavaliacao findUniqueOrThrow
   */
  export type progressoavaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which progressoavaliacao to fetch.
     */
    where: progressoavaliacaoWhereUniqueInput
  }

  /**
   * progressoavaliacao findFirst
   */
  export type progressoavaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which progressoavaliacao to fetch.
     */
    where?: progressoavaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoavaliacaos to fetch.
     */
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressoavaliacaos.
     */
    cursor?: progressoavaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoavaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoavaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressoavaliacaos.
     */
    distinct?: ProgressoavaliacaoScalarFieldEnum | ProgressoavaliacaoScalarFieldEnum[]
  }

  /**
   * progressoavaliacao findFirstOrThrow
   */
  export type progressoavaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which progressoavaliacao to fetch.
     */
    where?: progressoavaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoavaliacaos to fetch.
     */
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressoavaliacaos.
     */
    cursor?: progressoavaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoavaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoavaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressoavaliacaos.
     */
    distinct?: ProgressoavaliacaoScalarFieldEnum | ProgressoavaliacaoScalarFieldEnum[]
  }

  /**
   * progressoavaliacao findMany
   */
  export type progressoavaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which progressoavaliacaos to fetch.
     */
    where?: progressoavaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressoavaliacaos to fetch.
     */
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progressoavaliacaos.
     */
    cursor?: progressoavaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressoavaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressoavaliacaos.
     */
    skip?: number
    distinct?: ProgressoavaliacaoScalarFieldEnum | ProgressoavaliacaoScalarFieldEnum[]
  }

  /**
   * progressoavaliacao create
   */
  export type progressoavaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a progressoavaliacao.
     */
    data: XOR<progressoavaliacaoCreateInput, progressoavaliacaoUncheckedCreateInput>
  }

  /**
   * progressoavaliacao createMany
   */
  export type progressoavaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progressoavaliacaos.
     */
    data: progressoavaliacaoCreateManyInput | progressoavaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progressoavaliacao update
   */
  export type progressoavaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a progressoavaliacao.
     */
    data: XOR<progressoavaliacaoUpdateInput, progressoavaliacaoUncheckedUpdateInput>
    /**
     * Choose, which progressoavaliacao to update.
     */
    where: progressoavaliacaoWhereUniqueInput
  }

  /**
   * progressoavaliacao updateMany
   */
  export type progressoavaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progressoavaliacaos.
     */
    data: XOR<progressoavaliacaoUpdateManyMutationInput, progressoavaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which progressoavaliacaos to update
     */
    where?: progressoavaliacaoWhereInput
    /**
     * Limit how many progressoavaliacaos to update.
     */
    limit?: number
  }

  /**
   * progressoavaliacao upsert
   */
  export type progressoavaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the progressoavaliacao to update in case it exists.
     */
    where: progressoavaliacaoWhereUniqueInput
    /**
     * In case the progressoavaliacao found by the `where` argument doesn't exist, create a new progressoavaliacao with this data.
     */
    create: XOR<progressoavaliacaoCreateInput, progressoavaliacaoUncheckedCreateInput>
    /**
     * In case the progressoavaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progressoavaliacaoUpdateInput, progressoavaliacaoUncheckedUpdateInput>
  }

  /**
   * progressoavaliacao delete
   */
  export type progressoavaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    /**
     * Filter which progressoavaliacao to delete.
     */
    where: progressoavaliacaoWhereUniqueInput
  }

  /**
   * progressoavaliacao deleteMany
   */
  export type progressoavaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressoavaliacaos to delete
     */
    where?: progressoavaliacaoWhereInput
    /**
     * Limit how many progressoavaliacaos to delete.
     */
    limit?: number
  }

  /**
   * progressoavaliacao without action
   */
  export type progressoavaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model progressovideo
   */

  export type AggregateProgressovideo = {
    _count: ProgressovideoCountAggregateOutputType | null
    _avg: ProgressovideoAvgAggregateOutputType | null
    _sum: ProgressovideoSumAggregateOutputType | null
    _min: ProgressovideoMinAggregateOutputType | null
    _max: ProgressovideoMaxAggregateOutputType | null
  }

  export type ProgressovideoAvgAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    progressoVideo: number | null
  }

  export type ProgressovideoSumAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    progressoVideo: number | null
  }

  export type ProgressovideoMinAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    progressoVideo: number | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressovideoMaxAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    progressoVideo: number | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressovideoCountAggregateOutputType = {
    alunoId: number
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: number
    _all: number
  }


  export type ProgressovideoAvgAggregateInputType = {
    alunoId?: true
    videoId?: true
    progressoVideo?: true
  }

  export type ProgressovideoSumAggregateInputType = {
    alunoId?: true
    videoId?: true
    progressoVideo?: true
  }

  export type ProgressovideoMinAggregateInputType = {
    alunoId?: true
    videoId?: true
    progressoVideo?: true
    dataUltimaInteracao?: true
  }

  export type ProgressovideoMaxAggregateInputType = {
    alunoId?: true
    videoId?: true
    progressoVideo?: true
    dataUltimaInteracao?: true
  }

  export type ProgressovideoCountAggregateInputType = {
    alunoId?: true
    videoId?: true
    progressoVideo?: true
    dataUltimaInteracao?: true
    _all?: true
  }

  export type ProgressovideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressovideo to aggregate.
     */
    where?: progressovideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressovideos to fetch.
     */
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progressovideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressovideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressovideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progressovideos
    **/
    _count?: true | ProgressovideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressovideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressovideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressovideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressovideoMaxAggregateInputType
  }

  export type GetProgressovideoAggregateType<T extends ProgressovideoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressovideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressovideo[P]>
      : GetScalarType<T[P], AggregateProgressovideo[P]>
  }




  export type progressovideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressovideoWhereInput
    orderBy?: progressovideoOrderByWithAggregationInput | progressovideoOrderByWithAggregationInput[]
    by: ProgressovideoScalarFieldEnum[] | ProgressovideoScalarFieldEnum
    having?: progressovideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressovideoCountAggregateInputType | true
    _avg?: ProgressovideoAvgAggregateInputType
    _sum?: ProgressovideoSumAggregateInputType
    _min?: ProgressovideoMinAggregateInputType
    _max?: ProgressovideoMaxAggregateInputType
  }

  export type ProgressovideoGroupByOutputType = {
    alunoId: number
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: Date
    _count: ProgressovideoCountAggregateOutputType | null
    _avg: ProgressovideoAvgAggregateOutputType | null
    _sum: ProgressovideoSumAggregateOutputType | null
    _min: ProgressovideoMinAggregateOutputType | null
    _max: ProgressovideoMaxAggregateOutputType | null
  }

  type GetProgressovideoGroupByPayload<T extends progressovideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressovideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressovideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressovideoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressovideoGroupByOutputType[P]>
        }
      >
    >


  export type progressovideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    videoId?: boolean
    progressoVideo?: boolean
    dataUltimaInteracao?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    video?: boolean | videoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressovideo"]>



  export type progressovideoSelectScalar = {
    alunoId?: boolean
    videoId?: boolean
    progressoVideo?: boolean
    dataUltimaInteracao?: boolean
  }

  export type progressovideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "videoId" | "progressoVideo" | "dataUltimaInteracao", ExtArgs["result"]["progressovideo"]>
  export type progressovideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    video?: boolean | videoDefaultArgs<ExtArgs>
  }

  export type $progressovideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progressovideo"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      video: Prisma.$videoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      videoId: number
      progressoVideo: number
      dataUltimaInteracao: Date
    }, ExtArgs["result"]["progressovideo"]>
    composites: {}
  }

  type progressovideoGetPayload<S extends boolean | null | undefined | progressovideoDefaultArgs> = $Result.GetResult<Prisma.$progressovideoPayload, S>

  type progressovideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progressovideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressovideoCountAggregateInputType | true
    }

  export interface progressovideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progressovideo'], meta: { name: 'progressovideo' } }
    /**
     * Find zero or one Progressovideo that matches the filter.
     * @param {progressovideoFindUniqueArgs} args - Arguments to find a Progressovideo
     * @example
     * // Get one Progressovideo
     * const progressovideo = await prisma.progressovideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progressovideoFindUniqueArgs>(args: SelectSubset<T, progressovideoFindUniqueArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progressovideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progressovideoFindUniqueOrThrowArgs} args - Arguments to find a Progressovideo
     * @example
     * // Get one Progressovideo
     * const progressovideo = await prisma.progressovideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progressovideoFindUniqueOrThrowArgs>(args: SelectSubset<T, progressovideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressovideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoFindFirstArgs} args - Arguments to find a Progressovideo
     * @example
     * // Get one Progressovideo
     * const progressovideo = await prisma.progressovideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progressovideoFindFirstArgs>(args?: SelectSubset<T, progressovideoFindFirstArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progressovideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoFindFirstOrThrowArgs} args - Arguments to find a Progressovideo
     * @example
     * // Get one Progressovideo
     * const progressovideo = await prisma.progressovideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progressovideoFindFirstOrThrowArgs>(args?: SelectSubset<T, progressovideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progressovideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progressovideos
     * const progressovideos = await prisma.progressovideo.findMany()
     * 
     * // Get first 10 Progressovideos
     * const progressovideos = await prisma.progressovideo.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const progressovideoWithAlunoIdOnly = await prisma.progressovideo.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends progressovideoFindManyArgs>(args?: SelectSubset<T, progressovideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progressovideo.
     * @param {progressovideoCreateArgs} args - Arguments to create a Progressovideo.
     * @example
     * // Create one Progressovideo
     * const Progressovideo = await prisma.progressovideo.create({
     *   data: {
     *     // ... data to create a Progressovideo
     *   }
     * })
     * 
     */
    create<T extends progressovideoCreateArgs>(args: SelectSubset<T, progressovideoCreateArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progressovideos.
     * @param {progressovideoCreateManyArgs} args - Arguments to create many Progressovideos.
     * @example
     * // Create many Progressovideos
     * const progressovideo = await prisma.progressovideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progressovideoCreateManyArgs>(args?: SelectSubset<T, progressovideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progressovideo.
     * @param {progressovideoDeleteArgs} args - Arguments to delete one Progressovideo.
     * @example
     * // Delete one Progressovideo
     * const Progressovideo = await prisma.progressovideo.delete({
     *   where: {
     *     // ... filter to delete one Progressovideo
     *   }
     * })
     * 
     */
    delete<T extends progressovideoDeleteArgs>(args: SelectSubset<T, progressovideoDeleteArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progressovideo.
     * @param {progressovideoUpdateArgs} args - Arguments to update one Progressovideo.
     * @example
     * // Update one Progressovideo
     * const progressovideo = await prisma.progressovideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progressovideoUpdateArgs>(args: SelectSubset<T, progressovideoUpdateArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progressovideos.
     * @param {progressovideoDeleteManyArgs} args - Arguments to filter Progressovideos to delete.
     * @example
     * // Delete a few Progressovideos
     * const { count } = await prisma.progressovideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progressovideoDeleteManyArgs>(args?: SelectSubset<T, progressovideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progressovideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progressovideos
     * const progressovideo = await prisma.progressovideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progressovideoUpdateManyArgs>(args: SelectSubset<T, progressovideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progressovideo.
     * @param {progressovideoUpsertArgs} args - Arguments to update or create a Progressovideo.
     * @example
     * // Update or create a Progressovideo
     * const progressovideo = await prisma.progressovideo.upsert({
     *   create: {
     *     // ... data to create a Progressovideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progressovideo we want to update
     *   }
     * })
     */
    upsert<T extends progressovideoUpsertArgs>(args: SelectSubset<T, progressovideoUpsertArgs<ExtArgs>>): Prisma__progressovideoClient<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progressovideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoCountArgs} args - Arguments to filter Progressovideos to count.
     * @example
     * // Count the number of Progressovideos
     * const count = await prisma.progressovideo.count({
     *   where: {
     *     // ... the filter for the Progressovideos we want to count
     *   }
     * })
    **/
    count<T extends progressovideoCountArgs>(
      args?: Subset<T, progressovideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressovideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progressovideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressovideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressovideoAggregateArgs>(args: Subset<T, ProgressovideoAggregateArgs>): Prisma.PrismaPromise<GetProgressovideoAggregateType<T>>

    /**
     * Group by Progressovideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressovideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progressovideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progressovideoGroupByArgs['orderBy'] }
        : { orderBy?: progressovideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progressovideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressovideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progressovideo model
   */
  readonly fields: progressovideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progressovideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progressovideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends videoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videoDefaultArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the progressovideo model
   */
  interface progressovideoFieldRefs {
    readonly alunoId: FieldRef<"progressovideo", 'Int'>
    readonly videoId: FieldRef<"progressovideo", 'Int'>
    readonly progressoVideo: FieldRef<"progressovideo", 'Int'>
    readonly dataUltimaInteracao: FieldRef<"progressovideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * progressovideo findUnique
   */
  export type progressovideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter, which progressovideo to fetch.
     */
    where: progressovideoWhereUniqueInput
  }

  /**
   * progressovideo findUniqueOrThrow
   */
  export type progressovideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter, which progressovideo to fetch.
     */
    where: progressovideoWhereUniqueInput
  }

  /**
   * progressovideo findFirst
   */
  export type progressovideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter, which progressovideo to fetch.
     */
    where?: progressovideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressovideos to fetch.
     */
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressovideos.
     */
    cursor?: progressovideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressovideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressovideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressovideos.
     */
    distinct?: ProgressovideoScalarFieldEnum | ProgressovideoScalarFieldEnum[]
  }

  /**
   * progressovideo findFirstOrThrow
   */
  export type progressovideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter, which progressovideo to fetch.
     */
    where?: progressovideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressovideos to fetch.
     */
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progressovideos.
     */
    cursor?: progressovideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressovideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressovideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progressovideos.
     */
    distinct?: ProgressovideoScalarFieldEnum | ProgressovideoScalarFieldEnum[]
  }

  /**
   * progressovideo findMany
   */
  export type progressovideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter, which progressovideos to fetch.
     */
    where?: progressovideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progressovideos to fetch.
     */
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progressovideos.
     */
    cursor?: progressovideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progressovideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progressovideos.
     */
    skip?: number
    distinct?: ProgressovideoScalarFieldEnum | ProgressovideoScalarFieldEnum[]
  }

  /**
   * progressovideo create
   */
  export type progressovideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * The data needed to create a progressovideo.
     */
    data: XOR<progressovideoCreateInput, progressovideoUncheckedCreateInput>
  }

  /**
   * progressovideo createMany
   */
  export type progressovideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progressovideos.
     */
    data: progressovideoCreateManyInput | progressovideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progressovideo update
   */
  export type progressovideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * The data needed to update a progressovideo.
     */
    data: XOR<progressovideoUpdateInput, progressovideoUncheckedUpdateInput>
    /**
     * Choose, which progressovideo to update.
     */
    where: progressovideoWhereUniqueInput
  }

  /**
   * progressovideo updateMany
   */
  export type progressovideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progressovideos.
     */
    data: XOR<progressovideoUpdateManyMutationInput, progressovideoUncheckedUpdateManyInput>
    /**
     * Filter which progressovideos to update
     */
    where?: progressovideoWhereInput
    /**
     * Limit how many progressovideos to update.
     */
    limit?: number
  }

  /**
   * progressovideo upsert
   */
  export type progressovideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * The filter to search for the progressovideo to update in case it exists.
     */
    where: progressovideoWhereUniqueInput
    /**
     * In case the progressovideo found by the `where` argument doesn't exist, create a new progressovideo with this data.
     */
    create: XOR<progressovideoCreateInput, progressovideoUncheckedCreateInput>
    /**
     * In case the progressovideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progressovideoUpdateInput, progressovideoUncheckedUpdateInput>
  }

  /**
   * progressovideo delete
   */
  export type progressovideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    /**
     * Filter which progressovideo to delete.
     */
    where: progressovideoWhereUniqueInput
  }

  /**
   * progressovideo deleteMany
   */
  export type progressovideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progressovideos to delete
     */
    where?: progressovideoWhereInput
    /**
     * Limit how many progressovideos to delete.
     */
    limit?: number
  }

  /**
   * progressovideo without action
   */
  export type progressovideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
  }


  /**
   * Model turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    cursoId: number
    professorId: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turma to aggregate.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type turmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmaWhereInput
    orderBy?: turmaOrderByWithAggregationInput | turmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: turmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date
    dataFim: Date
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends turmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type turmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    alunoturma?: boolean | turma$alunoturmaArgs<ExtArgs>
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>



  export type turmaSelectScalar = {
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type turmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cursoId" | "professorId" | "dataInicio" | "dataFim", ExtArgs["result"]["turma"]>
  export type turmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunoturma?: boolean | turma$alunoturmaArgs<ExtArgs>
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $turmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "turma"
    objects: {
      alunoturma: Prisma.$alunoturmaPayload<ExtArgs>[]
      curso: Prisma.$cursoPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cursoId: number
      professorId: number
      dataInicio: Date
      dataFim: Date
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type turmaGetPayload<S extends boolean | null | undefined | turmaDefaultArgs> = $Result.GetResult<Prisma.$turmaPayload, S>

  type turmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<turmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface turmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['turma'], meta: { name: 'turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {turmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends turmaFindUniqueArgs>(args: SelectSubset<T, turmaFindUniqueArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {turmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends turmaFindUniqueOrThrowArgs>(args: SelectSubset<T, turmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends turmaFindFirstArgs>(args?: SelectSubset<T, turmaFindFirstArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends turmaFindFirstOrThrowArgs>(args?: SelectSubset<T, turmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends turmaFindManyArgs>(args?: SelectSubset<T, turmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {turmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends turmaCreateArgs>(args: SelectSubset<T, turmaCreateArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {turmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends turmaCreateManyArgs>(args?: SelectSubset<T, turmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {turmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends turmaDeleteArgs>(args: SelectSubset<T, turmaDeleteArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {turmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends turmaUpdateArgs>(args: SelectSubset<T, turmaUpdateArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {turmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends turmaDeleteManyArgs>(args?: SelectSubset<T, turmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends turmaUpdateManyArgs>(args: SelectSubset<T, turmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {turmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends turmaUpsertArgs>(args: SelectSubset<T, turmaUpsertArgs<ExtArgs>>): Prisma__turmaClient<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends turmaCountArgs>(
      args?: Subset<T, turmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends turmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: turmaGroupByArgs['orderBy'] }
        : { orderBy?: turmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, turmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the turma model
   */
  readonly fields: turmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__turmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunoturma<T extends turma$alunoturmaArgs<ExtArgs> = {}>(args?: Subset<T, turma$alunoturmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curso<T extends cursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursoDefaultArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the turma model
   */
  interface turmaFieldRefs {
    readonly id: FieldRef<"turma", 'Int'>
    readonly nome: FieldRef<"turma", 'String'>
    readonly cursoId: FieldRef<"turma", 'Int'>
    readonly professorId: FieldRef<"turma", 'Int'>
    readonly dataInicio: FieldRef<"turma", 'DateTime'>
    readonly dataFim: FieldRef<"turma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * turma findUnique
   */
  export type turmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma findUniqueOrThrow
   */
  export type turmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma findFirst
   */
  export type turmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma findFirstOrThrow
   */
  export type turmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter, which turma to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma findMany
   */
  export type turmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where?: turmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing turmas.
     */
    cursor?: turmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * turma create
   */
  export type turmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * The data needed to create a turma.
     */
    data: XOR<turmaCreateInput, turmaUncheckedCreateInput>
  }

  /**
   * turma createMany
   */
  export type turmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many turmas.
     */
    data: turmaCreateManyInput | turmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * turma update
   */
  export type turmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * The data needed to update a turma.
     */
    data: XOR<turmaUpdateInput, turmaUncheckedUpdateInput>
    /**
     * Choose, which turma to update.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma updateMany
   */
  export type turmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update turmas.
     */
    data: XOR<turmaUpdateManyMutationInput, turmaUncheckedUpdateManyInput>
    /**
     * Filter which turmas to update
     */
    where?: turmaWhereInput
    /**
     * Limit how many turmas to update.
     */
    limit?: number
  }

  /**
   * turma upsert
   */
  export type turmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * The filter to search for the turma to update in case it exists.
     */
    where: turmaWhereUniqueInput
    /**
     * In case the turma found by the `where` argument doesn't exist, create a new turma with this data.
     */
    create: XOR<turmaCreateInput, turmaUncheckedCreateInput>
    /**
     * In case the turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<turmaUpdateInput, turmaUncheckedUpdateInput>
  }

  /**
   * turma delete
   */
  export type turmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    /**
     * Filter which turma to delete.
     */
    where: turmaWhereUniqueInput
  }

  /**
   * turma deleteMany
   */
  export type turmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turmas to delete
     */
    where?: turmaWhereInput
    /**
     * Limit how many turmas to delete.
     */
    limit?: number
  }

  /**
   * turma.alunoturma
   */
  export type turma$alunoturmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    where?: alunoturmaWhereInput
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    cursor?: alunoturmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoturmaScalarFieldEnum | AlunoturmaScalarFieldEnum[]
  }

  /**
   * turma without action
   */
  export type turmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.usuario_tipo | null
    dataCadastro: Date | null
    planoId: number | null
    cpf: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.usuario_tipo | null
    dataCadastro: Date | null
    planoId: number | null
    cpf: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    dataCadastro: number
    planoId: number
    cpf: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
    cpf?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
    cpf?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
    cpf?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro: Date
    planoId: number | null
    cpf: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
    cpf?: boolean
    alunoturma?: boolean | usuario$alunoturmaArgs<ExtArgs>
    formapagamento?: boolean | usuario$formapagamentoArgs<ExtArgs>
    parceria?: boolean | usuario$parceriaArgs<ExtArgs>
    progressoapostila?: boolean | usuario$progressoapostilaArgs<ExtArgs>
    progressoavaliacao?: boolean | usuario$progressoavaliacaoArgs<ExtArgs>
    progressovideo?: boolean | usuario$progressovideoArgs<ExtArgs>
    turma?: boolean | usuario$turmaArgs<ExtArgs>
    plano?: boolean | usuario$planoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
    cpf?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo" | "dataCadastro" | "planoId" | "cpf", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunoturma?: boolean | usuario$alunoturmaArgs<ExtArgs>
    formapagamento?: boolean | usuario$formapagamentoArgs<ExtArgs>
    parceria?: boolean | usuario$parceriaArgs<ExtArgs>
    progressoapostila?: boolean | usuario$progressoapostilaArgs<ExtArgs>
    progressoavaliacao?: boolean | usuario$progressoavaliacaoArgs<ExtArgs>
    progressovideo?: boolean | usuario$progressovideoArgs<ExtArgs>
    turma?: boolean | usuario$turmaArgs<ExtArgs>
    plano?: boolean | usuario$planoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      alunoturma: Prisma.$alunoturmaPayload<ExtArgs>[]
      formapagamento: Prisma.$formapagamentoPayload<ExtArgs>[]
      parceria: Prisma.$parceriaPayload<ExtArgs>[]
      progressoapostila: Prisma.$progressoapostilaPayload<ExtArgs>[]
      progressoavaliacao: Prisma.$progressoavaliacaoPayload<ExtArgs>[]
      progressovideo: Prisma.$progressovideoPayload<ExtArgs>[]
      turma: Prisma.$turmaPayload<ExtArgs>[]
      plano: Prisma.$planoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      tipo: $Enums.usuario_tipo
      dataCadastro: Date
      planoId: number | null
      cpf: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunoturma<T extends usuario$alunoturmaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$alunoturmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunoturmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formapagamento<T extends usuario$formapagamentoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$formapagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formapagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parceria<T extends usuario$parceriaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$parceriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressoapostila<T extends usuario$progressoapostilaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$progressoapostilaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoapostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressoavaliacao<T extends usuario$progressoavaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$progressoavaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressoavaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressovideo<T extends usuario$progressovideoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$progressovideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turma<T extends usuario$turmaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$turmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plano<T extends usuario$planoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$planoArgs<ExtArgs>>): Prisma__planoClient<$Result.GetResult<Prisma.$planoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly tipo: FieldRef<"usuario", 'usuario_tipo'>
    readonly dataCadastro: FieldRef<"usuario", 'DateTime'>
    readonly planoId: FieldRef<"usuario", 'Int'>
    readonly cpf: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.alunoturma
   */
  export type usuario$alunoturmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunoturma
     */
    select?: alunoturmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunoturma
     */
    omit?: alunoturmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunoturmaInclude<ExtArgs> | null
    where?: alunoturmaWhereInput
    orderBy?: alunoturmaOrderByWithRelationInput | alunoturmaOrderByWithRelationInput[]
    cursor?: alunoturmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoturmaScalarFieldEnum | AlunoturmaScalarFieldEnum[]
  }

  /**
   * usuario.formapagamento
   */
  export type usuario$formapagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formapagamento
     */
    select?: formapagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formapagamento
     */
    omit?: formapagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formapagamentoInclude<ExtArgs> | null
    where?: formapagamentoWhereInput
    orderBy?: formapagamentoOrderByWithRelationInput | formapagamentoOrderByWithRelationInput[]
    cursor?: formapagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormapagamentoScalarFieldEnum | FormapagamentoScalarFieldEnum[]
  }

  /**
   * usuario.parceria
   */
  export type usuario$parceriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parceria
     */
    select?: parceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parceria
     */
    omit?: parceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: parceriaInclude<ExtArgs> | null
    where?: parceriaWhereInput
    orderBy?: parceriaOrderByWithRelationInput | parceriaOrderByWithRelationInput[]
    cursor?: parceriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * usuario.progressoapostila
   */
  export type usuario$progressoapostilaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoapostila
     */
    select?: progressoapostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoapostila
     */
    omit?: progressoapostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoapostilaInclude<ExtArgs> | null
    where?: progressoapostilaWhereInput
    orderBy?: progressoapostilaOrderByWithRelationInput | progressoapostilaOrderByWithRelationInput[]
    cursor?: progressoapostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoapostilaScalarFieldEnum | ProgressoapostilaScalarFieldEnum[]
  }

  /**
   * usuario.progressoavaliacao
   */
  export type usuario$progressoavaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressoavaliacao
     */
    select?: progressoavaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressoavaliacao
     */
    omit?: progressoavaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressoavaliacaoInclude<ExtArgs> | null
    where?: progressoavaliacaoWhereInput
    orderBy?: progressoavaliacaoOrderByWithRelationInput | progressoavaliacaoOrderByWithRelationInput[]
    cursor?: progressoavaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoavaliacaoScalarFieldEnum | ProgressoavaliacaoScalarFieldEnum[]
  }

  /**
   * usuario.progressovideo
   */
  export type usuario$progressovideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    where?: progressovideoWhereInput
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    cursor?: progressovideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressovideoScalarFieldEnum | ProgressovideoScalarFieldEnum[]
  }

  /**
   * usuario.turma
   */
  export type usuario$turmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turma
     */
    select?: turmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turma
     */
    omit?: turmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmaInclude<ExtArgs> | null
    where?: turmaWhereInput
    orderBy?: turmaOrderByWithRelationInput | turmaOrderByWithRelationInput[]
    cursor?: turmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * usuario.plano
   */
  export type usuario$planoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plano
     */
    select?: planoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plano
     */
    omit?: planoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planoInclude<ExtArgs> | null
    where?: planoWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    urlVideo: string | null
    duracao: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    urlVideo: string | null
    duracao: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    urlVideo: number
    duracao: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video to aggregate.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type videoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput
    orderBy?: videoOrderByWithAggregationInput | videoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: videoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends videoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type videoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    urlVideo?: boolean
    duracao?: boolean
    progressovideo?: boolean | video$progressovideoArgs<ExtArgs>
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type videoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    urlVideo?: boolean
    duracao?: boolean
  }

  export type videoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "urlVideo" | "duracao", ExtArgs["result"]["video"]>
  export type videoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressovideo?: boolean | video$progressovideoArgs<ExtArgs>
    modulo?: boolean | moduloDefaultArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $videoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video"
    objects: {
      progressovideo: Prisma.$progressovideoPayload<ExtArgs>[]
      modulo: Prisma.$moduloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      urlVideo: string
      duracao: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type videoGetPayload<S extends boolean | null | undefined | videoDefaultArgs> = $Result.GetResult<Prisma.$videoPayload, S>

  type videoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface videoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video'], meta: { name: 'video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {videoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videoFindUniqueArgs>(args: SelectSubset<T, videoFindUniqueArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videoFindUniqueOrThrowArgs>(args: SelectSubset<T, videoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videoFindFirstArgs>(args?: SelectSubset<T, videoFindFirstArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videoFindFirstOrThrowArgs>(args?: SelectSubset<T, videoFindFirstOrThrowArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videoFindManyArgs>(args?: SelectSubset<T, videoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {videoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends videoCreateArgs>(args: SelectSubset<T, videoCreateArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {videoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videoCreateManyArgs>(args?: SelectSubset<T, videoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {videoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends videoDeleteArgs>(args: SelectSubset<T, videoDeleteArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {videoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videoUpdateArgs>(args: SelectSubset<T, videoUpdateArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {videoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videoDeleteManyArgs>(args?: SelectSubset<T, videoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videoUpdateManyArgs>(args: SelectSubset<T, videoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {videoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends videoUpsertArgs>(args: SelectSubset<T, videoUpsertArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videoCountArgs>(
      args?: Subset<T, videoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends videoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoGroupByArgs['orderBy'] }
        : { orderBy?: videoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, videoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video model
   */
  readonly fields: videoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progressovideo<T extends video$progressovideoArgs<ExtArgs> = {}>(args?: Subset<T, video$progressovideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressovideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modulo<T extends moduloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduloDefaultArgs<ExtArgs>>): Prisma__moduloClient<$Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the video model
   */
  interface videoFieldRefs {
    readonly id: FieldRef<"video", 'Int'>
    readonly moduloId: FieldRef<"video", 'Int'>
    readonly titulo: FieldRef<"video", 'String'>
    readonly urlVideo: FieldRef<"video", 'String'>
    readonly duracao: FieldRef<"video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * video findUnique
   */
  export type videoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput
  }

  /**
   * video findUniqueOrThrow
   */
  export type videoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput
  }

  /**
   * video findFirst
   */
  export type videoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * video findFirstOrThrow
   */
  export type videoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * video findMany
   */
  export type videoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * video create
   */
  export type videoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The data needed to create a video.
     */
    data: XOR<videoCreateInput, videoUncheckedCreateInput>
  }

  /**
   * video createMany
   */
  export type videoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videoCreateManyInput | videoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * video update
   */
  export type videoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The data needed to update a video.
     */
    data: XOR<videoUpdateInput, videoUncheckedUpdateInput>
    /**
     * Choose, which video to update.
     */
    where: videoWhereUniqueInput
  }

  /**
   * video updateMany
   */
  export type videoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videoWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * video upsert
   */
  export type videoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The filter to search for the video to update in case it exists.
     */
    where: videoWhereUniqueInput
    /**
     * In case the video found by the `where` argument doesn't exist, create a new video with this data.
     */
    create: XOR<videoCreateInput, videoUncheckedCreateInput>
    /**
     * In case the video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoUpdateInput, videoUncheckedUpdateInput>
  }

  /**
   * video delete
   */
  export type videoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter which video to delete.
     */
    where: videoWhereUniqueInput
  }

  /**
   * video deleteMany
   */
  export type videoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videoWhereInput
    /**
     * Limit how many videos to delete.
     */
    limit?: number
  }

  /**
   * video.progressovideo
   */
  export type video$progressovideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progressovideo
     */
    select?: progressovideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progressovideo
     */
    omit?: progressovideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressovideoInclude<ExtArgs> | null
    where?: progressovideoWhereInput
    orderBy?: progressovideoOrderByWithRelationInput | progressovideoOrderByWithRelationInput[]
    cursor?: progressovideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressovideoScalarFieldEnum | ProgressovideoScalarFieldEnum[]
  }

  /**
   * video without action
   */
  export type videoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video
     */
    omit?: videoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlunoturmaScalarFieldEnum: {
    alunoId: 'alunoId',
    turmaId: 'turmaId'
  };

  export type AlunoturmaScalarFieldEnum = (typeof AlunoturmaScalarFieldEnum)[keyof typeof AlunoturmaScalarFieldEnum]


  export const ApostilaScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    arquivoUrl: 'arquivoUrl'
  };

  export type ApostilaScalarFieldEnum = (typeof ApostilaScalarFieldEnum)[keyof typeof ApostilaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria',
    cargaHoraria: 'cargaHoraria'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const FormapagamentoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    titular: 'titular',
    numero: 'numero',
    validade: 'validade',
    cvv: 'cvv',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    parcelas: 'parcelas'
  };

  export type FormapagamentoScalarFieldEnum = (typeof FormapagamentoScalarFieldEnum)[keyof typeof FormapagamentoScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    cursoId: 'cursoId',
    titulo: 'titulo',
    ordem: 'ordem'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const ParceriaScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    descricaoProjeto: 'descricaoProjeto',
    percentualPlataforma: 'percentualPlataforma',
    dataAssinatura: 'dataAssinatura',
    contratoUrl: 'contratoUrl'
  };

  export type ParceriaScalarFieldEnum = (typeof ParceriaScalarFieldEnum)[keyof typeof ParceriaScalarFieldEnum]


  export const PlanoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valor: 'valor'
  };

  export type PlanoScalarFieldEnum = (typeof PlanoScalarFieldEnum)[keyof typeof PlanoScalarFieldEnum]


  export const ProgressoapostilaScalarFieldEnum: {
    alunoId: 'alunoId',
    apostilaId: 'apostilaId',
    baixouApostila: 'baixouApostila',
    dataUltimaInteracao: 'dataUltimaInteracao'
  };

  export type ProgressoapostilaScalarFieldEnum = (typeof ProgressoapostilaScalarFieldEnum)[keyof typeof ProgressoapostilaScalarFieldEnum]


  export const ProgressoavaliacaoScalarFieldEnum: {
    alunoId: 'alunoId',
    avaliacaoId: 'avaliacaoId',
    notaAvaliacao: 'notaAvaliacao',
    dataUltimaInteracao: 'dataUltimaInteracao'
  };

  export type ProgressoavaliacaoScalarFieldEnum = (typeof ProgressoavaliacaoScalarFieldEnum)[keyof typeof ProgressoavaliacaoScalarFieldEnum]


  export const ProgressovideoScalarFieldEnum: {
    alunoId: 'alunoId',
    videoId: 'videoId',
    progressoVideo: 'progressoVideo',
    dataUltimaInteracao: 'dataUltimaInteracao'
  };

  export type ProgressovideoScalarFieldEnum = (typeof ProgressovideoScalarFieldEnum)[keyof typeof ProgressovideoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cursoId: 'cursoId',
    professorId: 'professorId',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    dataCadastro: 'dataCadastro',
    planoId: 'planoId',
    cpf: 'cpf'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    urlVideo: 'urlVideo',
    duracao: 'duracao'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const apostilaOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    arquivoUrl: 'arquivoUrl'
  };

  export type apostilaOrderByRelevanceFieldEnum = (typeof apostilaOrderByRelevanceFieldEnum)[keyof typeof apostilaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const avaliacaoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type avaliacaoOrderByRelevanceFieldEnum = (typeof avaliacaoOrderByRelevanceFieldEnum)[keyof typeof avaliacaoOrderByRelevanceFieldEnum]


  export const cursoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria'
  };

  export type cursoOrderByRelevanceFieldEnum = (typeof cursoOrderByRelevanceFieldEnum)[keyof typeof cursoOrderByRelevanceFieldEnum]


  export const formapagamentoOrderByRelevanceFieldEnum: {
    titular: 'titular',
    numero: 'numero',
    validade: 'validade',
    cvv: 'cvv'
  };

  export type formapagamentoOrderByRelevanceFieldEnum = (typeof formapagamentoOrderByRelevanceFieldEnum)[keyof typeof formapagamentoOrderByRelevanceFieldEnum]


  export const moduloOrderByRelevanceFieldEnum: {
    titulo: 'titulo'
  };

  export type moduloOrderByRelevanceFieldEnum = (typeof moduloOrderByRelevanceFieldEnum)[keyof typeof moduloOrderByRelevanceFieldEnum]


  export const parceriaOrderByRelevanceFieldEnum: {
    descricaoProjeto: 'descricaoProjeto',
    contratoUrl: 'contratoUrl'
  };

  export type parceriaOrderByRelevanceFieldEnum = (typeof parceriaOrderByRelevanceFieldEnum)[keyof typeof parceriaOrderByRelevanceFieldEnum]


  export const planoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type planoOrderByRelevanceFieldEnum = (typeof planoOrderByRelevanceFieldEnum)[keyof typeof planoOrderByRelevanceFieldEnum]


  export const turmaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type turmaOrderByRelevanceFieldEnum = (typeof turmaOrderByRelevanceFieldEnum)[keyof typeof turmaOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  export const videoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    urlVideo: 'urlVideo'
  };

  export type videoOrderByRelevanceFieldEnum = (typeof videoOrderByRelevanceFieldEnum)[keyof typeof videoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'formapagamento_tipo'
   */
  export type Enumformapagamento_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'formapagamento_tipo'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'usuario_tipo'
   */
  export type Enumusuario_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuario_tipo'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type alunoturmaWhereInput = {
    AND?: alunoturmaWhereInput | alunoturmaWhereInput[]
    OR?: alunoturmaWhereInput[]
    NOT?: alunoturmaWhereInput | alunoturmaWhereInput[]
    alunoId?: IntFilter<"alunoturma"> | number
    turmaId?: IntFilter<"alunoturma"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, turmaWhereInput>
  }

  export type alunoturmaOrderByWithRelationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    turma?: turmaOrderByWithRelationInput
  }

  export type alunoturmaWhereUniqueInput = Prisma.AtLeast<{
    alunoId_turmaId?: alunoturmaAlunoIdTurmaIdCompoundUniqueInput
    AND?: alunoturmaWhereInput | alunoturmaWhereInput[]
    OR?: alunoturmaWhereInput[]
    NOT?: alunoturmaWhereInput | alunoturmaWhereInput[]
    alunoId?: IntFilter<"alunoturma"> | number
    turmaId?: IntFilter<"alunoturma"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, turmaWhereInput>
  }, "alunoId_turmaId">

  export type alunoturmaOrderByWithAggregationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    _count?: alunoturmaCountOrderByAggregateInput
    _avg?: alunoturmaAvgOrderByAggregateInput
    _max?: alunoturmaMaxOrderByAggregateInput
    _min?: alunoturmaMinOrderByAggregateInput
    _sum?: alunoturmaSumOrderByAggregateInput
  }

  export type alunoturmaScalarWhereWithAggregatesInput = {
    AND?: alunoturmaScalarWhereWithAggregatesInput | alunoturmaScalarWhereWithAggregatesInput[]
    OR?: alunoturmaScalarWhereWithAggregatesInput[]
    NOT?: alunoturmaScalarWhereWithAggregatesInput | alunoturmaScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"alunoturma"> | number
    turmaId?: IntWithAggregatesFilter<"alunoturma"> | number
  }

  export type apostilaWhereInput = {
    AND?: apostilaWhereInput | apostilaWhereInput[]
    OR?: apostilaWhereInput[]
    NOT?: apostilaWhereInput | apostilaWhereInput[]
    id?: IntFilter<"apostila"> | number
    moduloId?: IntFilter<"apostila"> | number
    titulo?: StringFilter<"apostila"> | string
    arquivoUrl?: StringFilter<"apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
    progressoapostila?: ProgressoapostilaListRelationFilter
  }

  export type apostilaOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
    modulo?: moduloOrderByWithRelationInput
    progressoapostila?: progressoapostilaOrderByRelationAggregateInput
    _relevance?: apostilaOrderByRelevanceInput
  }

  export type apostilaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: apostilaWhereInput | apostilaWhereInput[]
    OR?: apostilaWhereInput[]
    NOT?: apostilaWhereInput | apostilaWhereInput[]
    moduloId?: IntFilter<"apostila"> | number
    titulo?: StringFilter<"apostila"> | string
    arquivoUrl?: StringFilter<"apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
    progressoapostila?: ProgressoapostilaListRelationFilter
  }, "id">

  export type apostilaOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
    _count?: apostilaCountOrderByAggregateInput
    _avg?: apostilaAvgOrderByAggregateInput
    _max?: apostilaMaxOrderByAggregateInput
    _min?: apostilaMinOrderByAggregateInput
    _sum?: apostilaSumOrderByAggregateInput
  }

  export type apostilaScalarWhereWithAggregatesInput = {
    AND?: apostilaScalarWhereWithAggregatesInput | apostilaScalarWhereWithAggregatesInput[]
    OR?: apostilaScalarWhereWithAggregatesInput[]
    NOT?: apostilaScalarWhereWithAggregatesInput | apostilaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"apostila"> | number
    moduloId?: IntWithAggregatesFilter<"apostila"> | number
    titulo?: StringWithAggregatesFilter<"apostila"> | string
    arquivoUrl?: StringWithAggregatesFilter<"apostila"> | string
  }

  export type avaliacaoWhereInput = {
    AND?: avaliacaoWhereInput | avaliacaoWhereInput[]
    OR?: avaliacaoWhereInput[]
    NOT?: avaliacaoWhereInput | avaliacaoWhereInput[]
    id?: IntFilter<"avaliacao"> | number
    moduloId?: IntFilter<"avaliacao"> | number
    titulo?: StringFilter<"avaliacao"> | string
    descricao?: StringNullableFilter<"avaliacao"> | string | null
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
    progressoavaliacao?: ProgressoavaliacaoListRelationFilter
  }

  export type avaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    modulo?: moduloOrderByWithRelationInput
    progressoavaliacao?: progressoavaliacaoOrderByRelationAggregateInput
    _relevance?: avaliacaoOrderByRelevanceInput
  }

  export type avaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: avaliacaoWhereInput | avaliacaoWhereInput[]
    OR?: avaliacaoWhereInput[]
    NOT?: avaliacaoWhereInput | avaliacaoWhereInput[]
    moduloId?: IntFilter<"avaliacao"> | number
    titulo?: StringFilter<"avaliacao"> | string
    descricao?: StringNullableFilter<"avaliacao"> | string | null
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
    progressoavaliacao?: ProgressoavaliacaoListRelationFilter
  }, "id">

  export type avaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: avaliacaoCountOrderByAggregateInput
    _avg?: avaliacaoAvgOrderByAggregateInput
    _max?: avaliacaoMaxOrderByAggregateInput
    _min?: avaliacaoMinOrderByAggregateInput
    _sum?: avaliacaoSumOrderByAggregateInput
  }

  export type avaliacaoScalarWhereWithAggregatesInput = {
    AND?: avaliacaoScalarWhereWithAggregatesInput | avaliacaoScalarWhereWithAggregatesInput[]
    OR?: avaliacaoScalarWhereWithAggregatesInput[]
    NOT?: avaliacaoScalarWhereWithAggregatesInput | avaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"avaliacao"> | number
    moduloId?: IntWithAggregatesFilter<"avaliacao"> | number
    titulo?: StringWithAggregatesFilter<"avaliacao"> | string
    descricao?: StringNullableWithAggregatesFilter<"avaliacao"> | string | null
  }

  export type cursoWhereInput = {
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    id?: IntFilter<"curso"> | number
    titulo?: StringFilter<"curso"> | string
    descricao?: StringNullableFilter<"curso"> | string | null
    categoria?: StringFilter<"curso"> | string
    cargaHoraria?: IntFilter<"curso"> | number
    modulo?: ModuloListRelationFilter
    turma?: TurmaListRelationFilter
  }

  export type cursoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
    modulo?: moduloOrderByRelationAggregateInput
    turma?: turmaOrderByRelationAggregateInput
    _relevance?: cursoOrderByRelevanceInput
  }

  export type cursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    titulo?: StringFilter<"curso"> | string
    descricao?: StringNullableFilter<"curso"> | string | null
    categoria?: StringFilter<"curso"> | string
    cargaHoraria?: IntFilter<"curso"> | number
    modulo?: ModuloListRelationFilter
    turma?: TurmaListRelationFilter
  }, "id">

  export type cursoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
    _count?: cursoCountOrderByAggregateInput
    _avg?: cursoAvgOrderByAggregateInput
    _max?: cursoMaxOrderByAggregateInput
    _min?: cursoMinOrderByAggregateInput
    _sum?: cursoSumOrderByAggregateInput
  }

  export type cursoScalarWhereWithAggregatesInput = {
    AND?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    OR?: cursoScalarWhereWithAggregatesInput[]
    NOT?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"curso"> | number
    titulo?: StringWithAggregatesFilter<"curso"> | string
    descricao?: StringNullableWithAggregatesFilter<"curso"> | string | null
    categoria?: StringWithAggregatesFilter<"curso"> | string
    cargaHoraria?: IntWithAggregatesFilter<"curso"> | number
  }

  export type formapagamentoWhereInput = {
    AND?: formapagamentoWhereInput | formapagamentoWhereInput[]
    OR?: formapagamentoWhereInput[]
    NOT?: formapagamentoWhereInput | formapagamentoWhereInput[]
    id?: IntFilter<"formapagamento"> | number
    tipo?: Enumformapagamento_tipoFilter<"formapagamento"> | $Enums.formapagamento_tipo
    titular?: StringFilter<"formapagamento"> | string
    numero?: StringFilter<"formapagamento"> | string
    validade?: StringFilter<"formapagamento"> | string
    cvv?: StringNullableFilter<"formapagamento"> | string | null
    usuarioId?: IntFilter<"formapagamento"> | number
    createdAt?: DateTimeFilter<"formapagamento"> | Date | string
    parcelas?: IntFilter<"formapagamento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type formapagamentoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    titular?: SortOrder
    numero?: SortOrder
    validade?: SortOrder
    cvv?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    parcelas?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: formapagamentoOrderByRelevanceInput
  }

  export type formapagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: formapagamentoWhereInput | formapagamentoWhereInput[]
    OR?: formapagamentoWhereInput[]
    NOT?: formapagamentoWhereInput | formapagamentoWhereInput[]
    tipo?: Enumformapagamento_tipoFilter<"formapagamento"> | $Enums.formapagamento_tipo
    titular?: StringFilter<"formapagamento"> | string
    numero?: StringFilter<"formapagamento"> | string
    validade?: StringFilter<"formapagamento"> | string
    cvv?: StringNullableFilter<"formapagamento"> | string | null
    usuarioId?: IntFilter<"formapagamento"> | number
    createdAt?: DateTimeFilter<"formapagamento"> | Date | string
    parcelas?: IntFilter<"formapagamento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type formapagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    titular?: SortOrder
    numero?: SortOrder
    validade?: SortOrder
    cvv?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    parcelas?: SortOrder
    _count?: formapagamentoCountOrderByAggregateInput
    _avg?: formapagamentoAvgOrderByAggregateInput
    _max?: formapagamentoMaxOrderByAggregateInput
    _min?: formapagamentoMinOrderByAggregateInput
    _sum?: formapagamentoSumOrderByAggregateInput
  }

  export type formapagamentoScalarWhereWithAggregatesInput = {
    AND?: formapagamentoScalarWhereWithAggregatesInput | formapagamentoScalarWhereWithAggregatesInput[]
    OR?: formapagamentoScalarWhereWithAggregatesInput[]
    NOT?: formapagamentoScalarWhereWithAggregatesInput | formapagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"formapagamento"> | number
    tipo?: Enumformapagamento_tipoWithAggregatesFilter<"formapagamento"> | $Enums.formapagamento_tipo
    titular?: StringWithAggregatesFilter<"formapagamento"> | string
    numero?: StringWithAggregatesFilter<"formapagamento"> | string
    validade?: StringWithAggregatesFilter<"formapagamento"> | string
    cvv?: StringNullableWithAggregatesFilter<"formapagamento"> | string | null
    usuarioId?: IntWithAggregatesFilter<"formapagamento"> | number
    createdAt?: DateTimeWithAggregatesFilter<"formapagamento"> | Date | string
    parcelas?: IntWithAggregatesFilter<"formapagamento"> | number
  }

  export type moduloWhereInput = {
    AND?: moduloWhereInput | moduloWhereInput[]
    OR?: moduloWhereInput[]
    NOT?: moduloWhereInput | moduloWhereInput[]
    id?: IntFilter<"modulo"> | number
    cursoId?: IntFilter<"modulo"> | number
    titulo?: StringFilter<"modulo"> | string
    ordem?: IntFilter<"modulo"> | number
    apostila?: ApostilaListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    video?: VideoListRelationFilter
  }

  export type moduloOrderByWithRelationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    apostila?: apostilaOrderByRelationAggregateInput
    avaliacao?: avaliacaoOrderByRelationAggregateInput
    curso?: cursoOrderByWithRelationInput
    video?: videoOrderByRelationAggregateInput
    _relevance?: moduloOrderByRelevanceInput
  }

  export type moduloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: moduloWhereInput | moduloWhereInput[]
    OR?: moduloWhereInput[]
    NOT?: moduloWhereInput | moduloWhereInput[]
    cursoId?: IntFilter<"modulo"> | number
    titulo?: StringFilter<"modulo"> | string
    ordem?: IntFilter<"modulo"> | number
    apostila?: ApostilaListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    video?: VideoListRelationFilter
  }, "id">

  export type moduloOrderByWithAggregationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    _count?: moduloCountOrderByAggregateInput
    _avg?: moduloAvgOrderByAggregateInput
    _max?: moduloMaxOrderByAggregateInput
    _min?: moduloMinOrderByAggregateInput
    _sum?: moduloSumOrderByAggregateInput
  }

  export type moduloScalarWhereWithAggregatesInput = {
    AND?: moduloScalarWhereWithAggregatesInput | moduloScalarWhereWithAggregatesInput[]
    OR?: moduloScalarWhereWithAggregatesInput[]
    NOT?: moduloScalarWhereWithAggregatesInput | moduloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"modulo"> | number
    cursoId?: IntWithAggregatesFilter<"modulo"> | number
    titulo?: StringWithAggregatesFilter<"modulo"> | string
    ordem?: IntWithAggregatesFilter<"modulo"> | number
  }

  export type parceriaWhereInput = {
    AND?: parceriaWhereInput | parceriaWhereInput[]
    OR?: parceriaWhereInput[]
    NOT?: parceriaWhereInput | parceriaWhereInput[]
    id?: IntFilter<"parceria"> | number
    alunoId?: IntFilter<"parceria"> | number
    descricaoProjeto?: StringNullableFilter<"parceria"> | string | null
    percentualPlataforma?: DecimalFilter<"parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"parceria"> | Date | string
    contratoUrl?: StringFilter<"parceria"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type parceriaOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrderInput | SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: parceriaOrderByRelevanceInput
  }

  export type parceriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: parceriaWhereInput | parceriaWhereInput[]
    OR?: parceriaWhereInput[]
    NOT?: parceriaWhereInput | parceriaWhereInput[]
    alunoId?: IntFilter<"parceria"> | number
    descricaoProjeto?: StringNullableFilter<"parceria"> | string | null
    percentualPlataforma?: DecimalFilter<"parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"parceria"> | Date | string
    contratoUrl?: StringFilter<"parceria"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type parceriaOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrderInput | SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
    _count?: parceriaCountOrderByAggregateInput
    _avg?: parceriaAvgOrderByAggregateInput
    _max?: parceriaMaxOrderByAggregateInput
    _min?: parceriaMinOrderByAggregateInput
    _sum?: parceriaSumOrderByAggregateInput
  }

  export type parceriaScalarWhereWithAggregatesInput = {
    AND?: parceriaScalarWhereWithAggregatesInput | parceriaScalarWhereWithAggregatesInput[]
    OR?: parceriaScalarWhereWithAggregatesInput[]
    NOT?: parceriaScalarWhereWithAggregatesInput | parceriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"parceria"> | number
    alunoId?: IntWithAggregatesFilter<"parceria"> | number
    descricaoProjeto?: StringNullableWithAggregatesFilter<"parceria"> | string | null
    percentualPlataforma?: DecimalWithAggregatesFilter<"parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeWithAggregatesFilter<"parceria"> | Date | string
    contratoUrl?: StringWithAggregatesFilter<"parceria"> | string
  }

  export type planoWhereInput = {
    AND?: planoWhereInput | planoWhereInput[]
    OR?: planoWhereInput[]
    NOT?: planoWhereInput | planoWhereInput[]
    id?: IntFilter<"plano"> | number
    nome?: StringFilter<"plano"> | string
    descricao?: StringFilter<"plano"> | string
    valor?: DecimalFilter<"plano"> | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioListRelationFilter
  }

  export type planoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    usuario?: usuarioOrderByRelationAggregateInput
    _relevance?: planoOrderByRelevanceInput
  }

  export type planoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: planoWhereInput | planoWhereInput[]
    OR?: planoWhereInput[]
    NOT?: planoWhereInput | planoWhereInput[]
    nome?: StringFilter<"plano"> | string
    descricao?: StringFilter<"plano"> | string
    valor?: DecimalFilter<"plano"> | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioListRelationFilter
  }, "id">

  export type planoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    _count?: planoCountOrderByAggregateInput
    _avg?: planoAvgOrderByAggregateInput
    _max?: planoMaxOrderByAggregateInput
    _min?: planoMinOrderByAggregateInput
    _sum?: planoSumOrderByAggregateInput
  }

  export type planoScalarWhereWithAggregatesInput = {
    AND?: planoScalarWhereWithAggregatesInput | planoScalarWhereWithAggregatesInput[]
    OR?: planoScalarWhereWithAggregatesInput[]
    NOT?: planoScalarWhereWithAggregatesInput | planoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plano"> | number
    nome?: StringWithAggregatesFilter<"plano"> | string
    descricao?: StringWithAggregatesFilter<"plano"> | string
    valor?: DecimalWithAggregatesFilter<"plano"> | Decimal | DecimalJsLike | number | string
  }

  export type progressoapostilaWhereInput = {
    AND?: progressoapostilaWhereInput | progressoapostilaWhereInput[]
    OR?: progressoapostilaWhereInput[]
    NOT?: progressoapostilaWhereInput | progressoapostilaWhereInput[]
    alunoId?: IntFilter<"progressoapostila"> | number
    apostilaId?: IntFilter<"progressoapostila"> | number
    baixouApostila?: BoolFilter<"progressoapostila"> | boolean
    dataUltimaInteracao?: DateTimeFilter<"progressoapostila"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, apostilaWhereInput>
  }

  export type progressoapostilaOrderByWithRelationInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
    baixouApostila?: SortOrder
    dataUltimaInteracao?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    apostila?: apostilaOrderByWithRelationInput
  }

  export type progressoapostilaWhereUniqueInput = Prisma.AtLeast<{
    alunoId_apostilaId?: progressoapostilaAlunoIdApostilaIdCompoundUniqueInput
    AND?: progressoapostilaWhereInput | progressoapostilaWhereInput[]
    OR?: progressoapostilaWhereInput[]
    NOT?: progressoapostilaWhereInput | progressoapostilaWhereInput[]
    alunoId?: IntFilter<"progressoapostila"> | number
    apostilaId?: IntFilter<"progressoapostila"> | number
    baixouApostila?: BoolFilter<"progressoapostila"> | boolean
    dataUltimaInteracao?: DateTimeFilter<"progressoapostila"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, apostilaWhereInput>
  }, "alunoId_apostilaId">

  export type progressoapostilaOrderByWithAggregationInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
    baixouApostila?: SortOrder
    dataUltimaInteracao?: SortOrder
    _count?: progressoapostilaCountOrderByAggregateInput
    _avg?: progressoapostilaAvgOrderByAggregateInput
    _max?: progressoapostilaMaxOrderByAggregateInput
    _min?: progressoapostilaMinOrderByAggregateInput
    _sum?: progressoapostilaSumOrderByAggregateInput
  }

  export type progressoapostilaScalarWhereWithAggregatesInput = {
    AND?: progressoapostilaScalarWhereWithAggregatesInput | progressoapostilaScalarWhereWithAggregatesInput[]
    OR?: progressoapostilaScalarWhereWithAggregatesInput[]
    NOT?: progressoapostilaScalarWhereWithAggregatesInput | progressoapostilaScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"progressoapostila"> | number
    apostilaId?: IntWithAggregatesFilter<"progressoapostila"> | number
    baixouApostila?: BoolWithAggregatesFilter<"progressoapostila"> | boolean
    dataUltimaInteracao?: DateTimeWithAggregatesFilter<"progressoapostila"> | Date | string
  }

  export type progressoavaliacaoWhereInput = {
    AND?: progressoavaliacaoWhereInput | progressoavaliacaoWhereInput[]
    OR?: progressoavaliacaoWhereInput[]
    NOT?: progressoavaliacaoWhereInput | progressoavaliacaoWhereInput[]
    alunoId?: IntFilter<"progressoavaliacao"> | number
    avaliacaoId?: IntFilter<"progressoavaliacao"> | number
    notaAvaliacao?: DecimalFilter<"progressoavaliacao"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"progressoavaliacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, avaliacaoWhereInput>
  }

  export type progressoavaliacaoOrderByWithRelationInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    avaliacao?: avaliacaoOrderByWithRelationInput
  }

  export type progressoavaliacaoWhereUniqueInput = Prisma.AtLeast<{
    alunoId_avaliacaoId?: progressoavaliacaoAlunoIdAvaliacaoIdCompoundUniqueInput
    AND?: progressoavaliacaoWhereInput | progressoavaliacaoWhereInput[]
    OR?: progressoavaliacaoWhereInput[]
    NOT?: progressoavaliacaoWhereInput | progressoavaliacaoWhereInput[]
    alunoId?: IntFilter<"progressoavaliacao"> | number
    avaliacaoId?: IntFilter<"progressoavaliacao"> | number
    notaAvaliacao?: DecimalFilter<"progressoavaliacao"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"progressoavaliacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, avaliacaoWhereInput>
  }, "alunoId_avaliacaoId">

  export type progressoavaliacaoOrderByWithAggregationInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
    _count?: progressoavaliacaoCountOrderByAggregateInput
    _avg?: progressoavaliacaoAvgOrderByAggregateInput
    _max?: progressoavaliacaoMaxOrderByAggregateInput
    _min?: progressoavaliacaoMinOrderByAggregateInput
    _sum?: progressoavaliacaoSumOrderByAggregateInput
  }

  export type progressoavaliacaoScalarWhereWithAggregatesInput = {
    AND?: progressoavaliacaoScalarWhereWithAggregatesInput | progressoavaliacaoScalarWhereWithAggregatesInput[]
    OR?: progressoavaliacaoScalarWhereWithAggregatesInput[]
    NOT?: progressoavaliacaoScalarWhereWithAggregatesInput | progressoavaliacaoScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"progressoavaliacao"> | number
    avaliacaoId?: IntWithAggregatesFilter<"progressoavaliacao"> | number
    notaAvaliacao?: DecimalWithAggregatesFilter<"progressoavaliacao"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeWithAggregatesFilter<"progressoavaliacao"> | Date | string
  }

  export type progressovideoWhereInput = {
    AND?: progressovideoWhereInput | progressovideoWhereInput[]
    OR?: progressovideoWhereInput[]
    NOT?: progressovideoWhereInput | progressovideoWhereInput[]
    alunoId?: IntFilter<"progressovideo"> | number
    videoId?: IntFilter<"progressovideo"> | number
    progressoVideo?: IntFilter<"progressovideo"> | number
    dataUltimaInteracao?: DateTimeFilter<"progressovideo"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, videoWhereInput>
  }

  export type progressovideoOrderByWithRelationInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
    dataUltimaInteracao?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    video?: videoOrderByWithRelationInput
  }

  export type progressovideoWhereUniqueInput = Prisma.AtLeast<{
    alunoId_videoId?: progressovideoAlunoIdVideoIdCompoundUniqueInput
    AND?: progressovideoWhereInput | progressovideoWhereInput[]
    OR?: progressovideoWhereInput[]
    NOT?: progressovideoWhereInput | progressovideoWhereInput[]
    alunoId?: IntFilter<"progressovideo"> | number
    videoId?: IntFilter<"progressovideo"> | number
    progressoVideo?: IntFilter<"progressovideo"> | number
    dataUltimaInteracao?: DateTimeFilter<"progressovideo"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, videoWhereInput>
  }, "alunoId_videoId">

  export type progressovideoOrderByWithAggregationInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
    dataUltimaInteracao?: SortOrder
    _count?: progressovideoCountOrderByAggregateInput
    _avg?: progressovideoAvgOrderByAggregateInput
    _max?: progressovideoMaxOrderByAggregateInput
    _min?: progressovideoMinOrderByAggregateInput
    _sum?: progressovideoSumOrderByAggregateInput
  }

  export type progressovideoScalarWhereWithAggregatesInput = {
    AND?: progressovideoScalarWhereWithAggregatesInput | progressovideoScalarWhereWithAggregatesInput[]
    OR?: progressovideoScalarWhereWithAggregatesInput[]
    NOT?: progressovideoScalarWhereWithAggregatesInput | progressovideoScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"progressovideo"> | number
    videoId?: IntWithAggregatesFilter<"progressovideo"> | number
    progressoVideo?: IntWithAggregatesFilter<"progressovideo"> | number
    dataUltimaInteracao?: DateTimeWithAggregatesFilter<"progressovideo"> | Date | string
  }

  export type turmaWhereInput = {
    AND?: turmaWhereInput | turmaWhereInput[]
    OR?: turmaWhereInput[]
    NOT?: turmaWhereInput | turmaWhereInput[]
    id?: IntFilter<"turma"> | number
    nome?: StringFilter<"turma"> | string
    cursoId?: IntFilter<"turma"> | number
    professorId?: IntFilter<"turma"> | number
    dataInicio?: DateTimeFilter<"turma"> | Date | string
    dataFim?: DateTimeFilter<"turma"> | Date | string
    alunoturma?: AlunoturmaListRelationFilter
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type turmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    alunoturma?: alunoturmaOrderByRelationAggregateInput
    curso?: cursoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: turmaOrderByRelevanceInput
  }

  export type turmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: turmaWhereInput | turmaWhereInput[]
    OR?: turmaWhereInput[]
    NOT?: turmaWhereInput | turmaWhereInput[]
    nome?: StringFilter<"turma"> | string
    cursoId?: IntFilter<"turma"> | number
    professorId?: IntFilter<"turma"> | number
    dataInicio?: DateTimeFilter<"turma"> | Date | string
    dataFim?: DateTimeFilter<"turma"> | Date | string
    alunoturma?: AlunoturmaListRelationFilter
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type turmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    _count?: turmaCountOrderByAggregateInput
    _avg?: turmaAvgOrderByAggregateInput
    _max?: turmaMaxOrderByAggregateInput
    _min?: turmaMinOrderByAggregateInput
    _sum?: turmaSumOrderByAggregateInput
  }

  export type turmaScalarWhereWithAggregatesInput = {
    AND?: turmaScalarWhereWithAggregatesInput | turmaScalarWhereWithAggregatesInput[]
    OR?: turmaScalarWhereWithAggregatesInput[]
    NOT?: turmaScalarWhereWithAggregatesInput | turmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"turma"> | number
    nome?: StringWithAggregatesFilter<"turma"> | string
    cursoId?: IntWithAggregatesFilter<"turma"> | number
    professorId?: IntWithAggregatesFilter<"turma"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"turma"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"turma"> | Date | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    nome?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumusuario_tipoFilter<"usuario"> | $Enums.usuario_tipo
    dataCadastro?: DateTimeFilter<"usuario"> | Date | string
    planoId?: IntNullableFilter<"usuario"> | number | null
    cpf?: StringNullableFilter<"usuario"> | string | null
    alunoturma?: AlunoturmaListRelationFilter
    formapagamento?: FormapagamentoListRelationFilter
    parceria?: ParceriaListRelationFilter
    progressoapostila?: ProgressoapostilaListRelationFilter
    progressoavaliacao?: ProgressoavaliacaoListRelationFilter
    progressovideo?: ProgressovideoListRelationFilter
    turma?: TurmaListRelationFilter
    plano?: XOR<PlanoNullableScalarRelationFilter, planoWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    alunoturma?: alunoturmaOrderByRelationAggregateInput
    formapagamento?: formapagamentoOrderByRelationAggregateInput
    parceria?: parceriaOrderByRelationAggregateInput
    progressoapostila?: progressoapostilaOrderByRelationAggregateInput
    progressoavaliacao?: progressoavaliacaoOrderByRelationAggregateInput
    progressovideo?: progressovideoOrderByRelationAggregateInput
    turma?: turmaOrderByRelationAggregateInput
    plano?: planoOrderByWithRelationInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumusuario_tipoFilter<"usuario"> | $Enums.usuario_tipo
    dataCadastro?: DateTimeFilter<"usuario"> | Date | string
    planoId?: IntNullableFilter<"usuario"> | number | null
    cpf?: StringNullableFilter<"usuario"> | string | null
    alunoturma?: AlunoturmaListRelationFilter
    formapagamento?: FormapagamentoListRelationFilter
    parceria?: ParceriaListRelationFilter
    progressoapostila?: ProgressoapostilaListRelationFilter
    progressoavaliacao?: ProgressoavaliacaoListRelationFilter
    progressovideo?: ProgressovideoListRelationFilter
    turma?: TurmaListRelationFilter
    plano?: XOR<PlanoNullableScalarRelationFilter, planoWhereInput> | null
  }, "id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    nome?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    tipo?: Enumusuario_tipoWithAggregatesFilter<"usuario"> | $Enums.usuario_tipo
    dataCadastro?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    planoId?: IntNullableWithAggregatesFilter<"usuario"> | number | null
    cpf?: StringNullableWithAggregatesFilter<"usuario"> | string | null
  }

  export type videoWhereInput = {
    AND?: videoWhereInput | videoWhereInput[]
    OR?: videoWhereInput[]
    NOT?: videoWhereInput | videoWhereInput[]
    id?: IntFilter<"video"> | number
    moduloId?: IntFilter<"video"> | number
    titulo?: StringFilter<"video"> | string
    urlVideo?: StringFilter<"video"> | string
    duracao?: IntFilter<"video"> | number
    progressovideo?: ProgressovideoListRelationFilter
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
  }

  export type videoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
    progressovideo?: progressovideoOrderByRelationAggregateInput
    modulo?: moduloOrderByWithRelationInput
    _relevance?: videoOrderByRelevanceInput
  }

  export type videoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: videoWhereInput | videoWhereInput[]
    OR?: videoWhereInput[]
    NOT?: videoWhereInput | videoWhereInput[]
    moduloId?: IntFilter<"video"> | number
    titulo?: StringFilter<"video"> | string
    urlVideo?: StringFilter<"video"> | string
    duracao?: IntFilter<"video"> | number
    progressovideo?: ProgressovideoListRelationFilter
    modulo?: XOR<ModuloScalarRelationFilter, moduloWhereInput>
  }, "id">

  export type videoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
    _count?: videoCountOrderByAggregateInput
    _avg?: videoAvgOrderByAggregateInput
    _max?: videoMaxOrderByAggregateInput
    _min?: videoMinOrderByAggregateInput
    _sum?: videoSumOrderByAggregateInput
  }

  export type videoScalarWhereWithAggregatesInput = {
    AND?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[]
    OR?: videoScalarWhereWithAggregatesInput[]
    NOT?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"video"> | number
    moduloId?: IntWithAggregatesFilter<"video"> | number
    titulo?: StringWithAggregatesFilter<"video"> | string
    urlVideo?: StringWithAggregatesFilter<"video"> | string
    duracao?: IntWithAggregatesFilter<"video"> | number
  }

  export type alunoturmaCreateInput = {
    usuario: usuarioCreateNestedOneWithoutAlunoturmaInput
    turma: turmaCreateNestedOneWithoutAlunoturmaInput
  }

  export type alunoturmaUncheckedCreateInput = {
    alunoId: number
    turmaId: number
  }

  export type alunoturmaUpdateInput = {
    usuario?: usuarioUpdateOneRequiredWithoutAlunoturmaNestedInput
    turma?: turmaUpdateOneRequiredWithoutAlunoturmaNestedInput
  }

  export type alunoturmaUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type alunoturmaCreateManyInput = {
    alunoId: number
    turmaId: number
  }

  export type alunoturmaUpdateManyMutationInput = {

  }

  export type alunoturmaUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type apostilaCreateInput = {
    titulo: string
    arquivoUrl: string
    modulo: moduloCreateNestedOneWithoutApostilaInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutApostilaInput
  }

  export type apostilaUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type apostilaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    modulo?: moduloUpdateOneRequiredWithoutApostilaNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutApostilaNestedInput
  }

  export type apostilaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type apostilaCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
  }

  export type apostilaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type apostilaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type avaliacaoCreateInput = {
    titulo: string
    descricao?: string | null
    modulo: moduloCreateNestedOneWithoutAvaliacaoInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao?: string | null
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type avaliacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    modulo?: moduloUpdateOneRequiredWithoutAvaliacaoNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type avaliacaoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao?: string | null
  }

  export type avaliacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type avaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cursoCreateInput = {
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    modulo?: moduloCreateNestedManyWithoutCursoInput
    turma?: turmaCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    modulo?: moduloUncheckedCreateNestedManyWithoutCursoInput
    turma?: turmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulo?: moduloUpdateManyWithoutCursoNestedInput
    turma?: turmaUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulo?: moduloUncheckedUpdateManyWithoutCursoNestedInput
    turma?: turmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type cursoCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
  }

  export type cursoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type cursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoCreateInput = {
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    createdAt?: Date | string
    parcelas: number
    usuario: usuarioCreateNestedOneWithoutFormapagamentoInput
  }

  export type formapagamentoUncheckedCreateInput = {
    id?: number
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    usuarioId: number
    createdAt?: Date | string
    parcelas: number
  }

  export type formapagamentoUpdateInput = {
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneRequiredWithoutFormapagamentoNestedInput
  }

  export type formapagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoCreateManyInput = {
    id?: number
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    usuarioId: number
    createdAt?: Date | string
    parcelas: number
  }

  export type formapagamentoUpdateManyMutationInput = {
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type moduloCreateInput = {
    titulo: string
    ordem: number
    apostila?: apostilaCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoCreateNestedManyWithoutModuloInput
    curso: cursoCreateNestedOneWithoutModuloInput
    video?: videoCreateNestedManyWithoutModuloInput
  }

  export type moduloUncheckedCreateInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    apostila?: apostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutModuloInput
    video?: videoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type moduloUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUpdateManyWithoutModuloNestedInput
    curso?: cursoUpdateOneRequiredWithoutModuloNestedInput
    video?: videoUpdateManyWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutModuloNestedInput
    video?: videoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type moduloCreateManyInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
  }

  export type moduloUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type moduloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type parceriaCreateInput = {
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
    usuario: usuarioCreateNestedOneWithoutParceriaInput
  }

  export type parceriaUncheckedCreateInput = {
    id?: number
    alunoId: number
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type parceriaUpdateInput = {
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutParceriaNestedInput
  }

  export type parceriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type parceriaCreateManyInput = {
    id?: number
    alunoId: number
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type parceriaUpdateManyMutationInput = {
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type parceriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type planoCreateInput = {
    nome: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    usuario?: usuarioCreateNestedManyWithoutPlanoInput
  }

  export type planoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    usuario?: usuarioUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type planoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: usuarioUpdateManyWithoutPlanoNestedInput
  }

  export type planoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: usuarioUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type planoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
  }

  export type planoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type planoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type progressoapostilaCreateInput = {
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressoapostilaInput
    apostila: apostilaCreateNestedOneWithoutProgressoapostilaInput
  }

  export type progressoapostilaUncheckedCreateInput = {
    alunoId: number
    apostilaId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoapostilaUpdateInput = {
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressoapostilaNestedInput
    apostila?: apostilaUpdateOneRequiredWithoutProgressoapostilaNestedInput
  }

  export type progressoapostilaUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoapostilaCreateManyInput = {
    alunoId: number
    apostilaId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoapostilaUpdateManyMutationInput = {
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoapostilaUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoCreateInput = {
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressoavaliacaoInput
    avaliacao: avaliacaoCreateNestedOneWithoutProgressoavaliacaoInput
  }

  export type progressoavaliacaoUncheckedCreateInput = {
    alunoId: number
    avaliacaoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoUpdateInput = {
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressoavaliacaoNestedInput
    avaliacao?: avaliacaoUpdateOneRequiredWithoutProgressoavaliacaoNestedInput
  }

  export type progressoavaliacaoUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoCreateManyInput = {
    alunoId: number
    avaliacaoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoUpdateManyMutationInput = {
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoCreateInput = {
    progressoVideo: number
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressovideoInput
    video: videoCreateNestedOneWithoutProgressovideoInput
  }

  export type progressovideoUncheckedCreateInput = {
    alunoId: number
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type progressovideoUpdateInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressovideoNestedInput
    video?: videoUpdateOneRequiredWithoutProgressovideoNestedInput
  }

  export type progressovideoUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoCreateManyInput = {
    alunoId: number
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type progressovideoUpdateManyMutationInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turmaCreateInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaCreateNestedManyWithoutTurmaInput
    curso: cursoCreateNestedOneWithoutTurmaInput
    usuario: usuarioCreateNestedOneWithoutTurmaInput
  }

  export type turmaUncheckedCreateInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type turmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUpdateManyWithoutTurmaNestedInput
    curso?: cursoUpdateOneRequiredWithoutTurmaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type turmaCreateManyInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type turmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioCreateInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
  }

  export type usuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videoCreateInput = {
    titulo: string
    urlVideo: string
    duracao: number
    progressovideo?: progressovideoCreateNestedManyWithoutVideoInput
    modulo: moduloCreateNestedOneWithoutVideoInput
  }

  export type videoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progressovideo?: progressovideoUpdateManyWithoutVideoNestedInput
    modulo?: moduloUpdateOneRequiredWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progressovideo?: progressovideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type videoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type videoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type TurmaScalarRelationFilter = {
    is?: turmaWhereInput
    isNot?: turmaWhereInput
  }

  export type alunoturmaAlunoIdTurmaIdCompoundUniqueInput = {
    alunoId: number
    turmaId: number
  }

  export type alunoturmaCountOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type alunoturmaAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type alunoturmaMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type alunoturmaMinOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type alunoturmaSumOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ModuloScalarRelationFilter = {
    is?: moduloWhereInput
    isNot?: moduloWhereInput
  }

  export type ProgressoapostilaListRelationFilter = {
    every?: progressoapostilaWhereInput
    some?: progressoapostilaWhereInput
    none?: progressoapostilaWhereInput
  }

  export type progressoapostilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type apostilaOrderByRelevanceInput = {
    fields: apostilaOrderByRelevanceFieldEnum | apostilaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type apostilaCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type apostilaAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type apostilaMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type apostilaMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type apostilaSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProgressoavaliacaoListRelationFilter = {
    every?: progressoavaliacaoWhereInput
    some?: progressoavaliacaoWhereInput
    none?: progressoavaliacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type progressoavaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type avaliacaoOrderByRelevanceInput = {
    fields: avaliacaoOrderByRelevanceFieldEnum | avaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type avaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type avaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type avaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type avaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type avaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ModuloListRelationFilter = {
    every?: moduloWhereInput
    some?: moduloWhereInput
    none?: moduloWhereInput
  }

  export type TurmaListRelationFilter = {
    every?: turmaWhereInput
    some?: turmaWhereInput
    none?: turmaWhereInput
  }

  export type moduloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type turmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursoOrderByRelevanceInput = {
    fields: cursoOrderByRelevanceFieldEnum | cursoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cursoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type cursoAvgOrderByAggregateInput = {
    id?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type cursoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type cursoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type cursoSumOrderByAggregateInput = {
    id?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type Enumformapagamento_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.formapagamento_tipo | Enumformapagamento_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.formapagamento_tipo[]
    notIn?: $Enums.formapagamento_tipo[]
    not?: NestedEnumformapagamento_tipoFilter<$PrismaModel> | $Enums.formapagamento_tipo
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type formapagamentoOrderByRelevanceInput = {
    fields: formapagamentoOrderByRelevanceFieldEnum | formapagamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formapagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titular?: SortOrder
    numero?: SortOrder
    validade?: SortOrder
    cvv?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    parcelas?: SortOrder
  }

  export type formapagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    parcelas?: SortOrder
  }

  export type formapagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titular?: SortOrder
    numero?: SortOrder
    validade?: SortOrder
    cvv?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    parcelas?: SortOrder
  }

  export type formapagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    titular?: SortOrder
    numero?: SortOrder
    validade?: SortOrder
    cvv?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    parcelas?: SortOrder
  }

  export type formapagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    parcelas?: SortOrder
  }

  export type Enumformapagamento_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.formapagamento_tipo | Enumformapagamento_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.formapagamento_tipo[]
    notIn?: $Enums.formapagamento_tipo[]
    not?: NestedEnumformapagamento_tipoWithAggregatesFilter<$PrismaModel> | $Enums.formapagamento_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumformapagamento_tipoFilter<$PrismaModel>
    _max?: NestedEnumformapagamento_tipoFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ApostilaListRelationFilter = {
    every?: apostilaWhereInput
    some?: apostilaWhereInput
    none?: apostilaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: avaliacaoWhereInput
    some?: avaliacaoWhereInput
    none?: avaliacaoWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: cursoWhereInput
    isNot?: cursoWhereInput
  }

  export type VideoListRelationFilter = {
    every?: videoWhereInput
    some?: videoWhereInput
    none?: videoWhereInput
  }

  export type apostilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type avaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduloOrderByRelevanceInput = {
    fields: moduloOrderByRelevanceFieldEnum | moduloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type moduloCountOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type moduloAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type moduloMaxOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type moduloMinOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type moduloSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type parceriaOrderByRelevanceInput = {
    fields: parceriaOrderByRelevanceFieldEnum | parceriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type parceriaCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type parceriaAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentualPlataforma?: SortOrder
  }

  export type parceriaMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type parceriaMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type parceriaSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentualPlataforma?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type planoOrderByRelevanceInput = {
    fields: planoOrderByRelevanceFieldEnum | planoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type planoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type planoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type planoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type planoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
  }

  export type planoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApostilaScalarRelationFilter = {
    is?: apostilaWhereInput
    isNot?: apostilaWhereInput
  }

  export type progressoapostilaAlunoIdApostilaIdCompoundUniqueInput = {
    alunoId: number
    apostilaId: number
  }

  export type progressoapostilaCountOrderByAggregateInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
    baixouApostila?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoapostilaAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
  }

  export type progressoapostilaMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
    baixouApostila?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoapostilaMinOrderByAggregateInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
    baixouApostila?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoapostilaSumOrderByAggregateInput = {
    alunoId?: SortOrder
    apostilaId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: avaliacaoWhereInput
    isNot?: avaliacaoWhereInput
  }

  export type progressoavaliacaoAlunoIdAvaliacaoIdCompoundUniqueInput = {
    alunoId: number
    avaliacaoId: number
  }

  export type progressoavaliacaoCountOrderByAggregateInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoavaliacaoAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
  }

  export type progressoavaliacaoMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoavaliacaoMinOrderByAggregateInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressoavaliacaoSumOrderByAggregateInput = {
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    notaAvaliacao?: SortOrder
  }

  export type VideoScalarRelationFilter = {
    is?: videoWhereInput
    isNot?: videoWhereInput
  }

  export type progressovideoAlunoIdVideoIdCompoundUniqueInput = {
    alunoId: number
    videoId: number
  }

  export type progressovideoCountOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressovideoAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
  }

  export type progressovideoMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressovideoMinOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type progressovideoSumOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    progressoVideo?: SortOrder
  }

  export type AlunoturmaListRelationFilter = {
    every?: alunoturmaWhereInput
    some?: alunoturmaWhereInput
    none?: alunoturmaWhereInput
  }

  export type alunoturmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type turmaOrderByRelevanceInput = {
    fields: turmaOrderByRelevanceFieldEnum | turmaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type turmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type turmaAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type turmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type turmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type turmaSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type Enumusuario_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoFilter<$PrismaModel> | $Enums.usuario_tipo
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FormapagamentoListRelationFilter = {
    every?: formapagamentoWhereInput
    some?: formapagamentoWhereInput
    none?: formapagamentoWhereInput
  }

  export type ParceriaListRelationFilter = {
    every?: parceriaWhereInput
    some?: parceriaWhereInput
    none?: parceriaWhereInput
  }

  export type ProgressovideoListRelationFilter = {
    every?: progressovideoWhereInput
    some?: progressovideoWhereInput
    none?: progressovideoWhereInput
  }

  export type PlanoNullableScalarRelationFilter = {
    is?: planoWhereInput | null
    isNot?: planoWhereInput | null
  }

  export type formapagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parceriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type progressovideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
    cpf?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
    cpf?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
    cpf?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type Enumusuario_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type videoOrderByRelevanceInput = {
    fields: videoOrderByRelevanceFieldEnum | videoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type videoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type videoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type videoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type videoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type videoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type usuarioCreateNestedOneWithoutAlunoturmaInput = {
    create?: XOR<usuarioCreateWithoutAlunoturmaInput, usuarioUncheckedCreateWithoutAlunoturmaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAlunoturmaInput
    connect?: usuarioWhereUniqueInput
  }

  export type turmaCreateNestedOneWithoutAlunoturmaInput = {
    create?: XOR<turmaCreateWithoutAlunoturmaInput, turmaUncheckedCreateWithoutAlunoturmaInput>
    connectOrCreate?: turmaCreateOrConnectWithoutAlunoturmaInput
    connect?: turmaWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutAlunoturmaNestedInput = {
    create?: XOR<usuarioCreateWithoutAlunoturmaInput, usuarioUncheckedCreateWithoutAlunoturmaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAlunoturmaInput
    upsert?: usuarioUpsertWithoutAlunoturmaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAlunoturmaInput, usuarioUpdateWithoutAlunoturmaInput>, usuarioUncheckedUpdateWithoutAlunoturmaInput>
  }

  export type turmaUpdateOneRequiredWithoutAlunoturmaNestedInput = {
    create?: XOR<turmaCreateWithoutAlunoturmaInput, turmaUncheckedCreateWithoutAlunoturmaInput>
    connectOrCreate?: turmaCreateOrConnectWithoutAlunoturmaInput
    upsert?: turmaUpsertWithoutAlunoturmaInput
    connect?: turmaWhereUniqueInput
    update?: XOR<XOR<turmaUpdateToOneWithWhereWithoutAlunoturmaInput, turmaUpdateWithoutAlunoturmaInput>, turmaUncheckedUpdateWithoutAlunoturmaInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type moduloCreateNestedOneWithoutApostilaInput = {
    create?: XOR<moduloCreateWithoutApostilaInput, moduloUncheckedCreateWithoutApostilaInput>
    connectOrCreate?: moduloCreateOrConnectWithoutApostilaInput
    connect?: moduloWhereUniqueInput
  }

  export type progressoapostilaCreateNestedManyWithoutApostilaInput = {
    create?: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput> | progressoapostilaCreateWithoutApostilaInput[] | progressoapostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutApostilaInput | progressoapostilaCreateOrConnectWithoutApostilaInput[]
    createMany?: progressoapostilaCreateManyApostilaInputEnvelope
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
  }

  export type progressoapostilaUncheckedCreateNestedManyWithoutApostilaInput = {
    create?: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput> | progressoapostilaCreateWithoutApostilaInput[] | progressoapostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutApostilaInput | progressoapostilaCreateOrConnectWithoutApostilaInput[]
    createMany?: progressoapostilaCreateManyApostilaInputEnvelope
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type moduloUpdateOneRequiredWithoutApostilaNestedInput = {
    create?: XOR<moduloCreateWithoutApostilaInput, moduloUncheckedCreateWithoutApostilaInput>
    connectOrCreate?: moduloCreateOrConnectWithoutApostilaInput
    upsert?: moduloUpsertWithoutApostilaInput
    connect?: moduloWhereUniqueInput
    update?: XOR<XOR<moduloUpdateToOneWithWhereWithoutApostilaInput, moduloUpdateWithoutApostilaInput>, moduloUncheckedUpdateWithoutApostilaInput>
  }

  export type progressoapostilaUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput> | progressoapostilaCreateWithoutApostilaInput[] | progressoapostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutApostilaInput | progressoapostilaCreateOrConnectWithoutApostilaInput[]
    upsert?: progressoapostilaUpsertWithWhereUniqueWithoutApostilaInput | progressoapostilaUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: progressoapostilaCreateManyApostilaInputEnvelope
    set?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    disconnect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    delete?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    update?: progressoapostilaUpdateWithWhereUniqueWithoutApostilaInput | progressoapostilaUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: progressoapostilaUpdateManyWithWhereWithoutApostilaInput | progressoapostilaUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
  }

  export type progressoapostilaUncheckedUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput> | progressoapostilaCreateWithoutApostilaInput[] | progressoapostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutApostilaInput | progressoapostilaCreateOrConnectWithoutApostilaInput[]
    upsert?: progressoapostilaUpsertWithWhereUniqueWithoutApostilaInput | progressoapostilaUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: progressoapostilaCreateManyApostilaInputEnvelope
    set?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    disconnect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    delete?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    update?: progressoapostilaUpdateWithWhereUniqueWithoutApostilaInput | progressoapostilaUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: progressoapostilaUpdateManyWithWhereWithoutApostilaInput | progressoapostilaUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
  }

  export type moduloCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<moduloCreateWithoutAvaliacaoInput, moduloUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: moduloCreateOrConnectWithoutAvaliacaoInput
    connect?: moduloWhereUniqueInput
  }

  export type progressoavaliacaoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput> | progressoavaliacaoCreateWithoutAvaliacaoInput[] | progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput | progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: progressoavaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
  }

  export type progressoavaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput> | progressoavaliacaoCreateWithoutAvaliacaoInput[] | progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput | progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: progressoavaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type moduloUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<moduloCreateWithoutAvaliacaoInput, moduloUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: moduloCreateOrConnectWithoutAvaliacaoInput
    upsert?: moduloUpsertWithoutAvaliacaoInput
    connect?: moduloWhereUniqueInput
    update?: XOR<XOR<moduloUpdateToOneWithWhereWithoutAvaliacaoInput, moduloUpdateWithoutAvaliacaoInput>, moduloUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput> | progressoavaliacaoCreateWithoutAvaliacaoInput[] | progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput | progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: progressoavaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | progressoavaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: progressoavaliacaoCreateManyAvaliacaoInputEnvelope
    set?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    disconnect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    delete?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    update?: progressoavaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | progressoavaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: progressoavaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | progressoavaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
  }

  export type progressoavaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput> | progressoavaliacaoCreateWithoutAvaliacaoInput[] | progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput | progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: progressoavaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | progressoavaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: progressoavaliacaoCreateManyAvaliacaoInputEnvelope
    set?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    disconnect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    delete?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    update?: progressoavaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | progressoavaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: progressoavaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | progressoavaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
  }

  export type moduloCreateNestedManyWithoutCursoInput = {
    create?: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput> | moduloCreateWithoutCursoInput[] | moduloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: moduloCreateOrConnectWithoutCursoInput | moduloCreateOrConnectWithoutCursoInput[]
    createMany?: moduloCreateManyCursoInputEnvelope
    connect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
  }

  export type turmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput> | turmaCreateWithoutCursoInput[] | turmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutCursoInput | turmaCreateOrConnectWithoutCursoInput[]
    createMany?: turmaCreateManyCursoInputEnvelope
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
  }

  export type moduloUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput> | moduloCreateWithoutCursoInput[] | moduloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: moduloCreateOrConnectWithoutCursoInput | moduloCreateOrConnectWithoutCursoInput[]
    createMany?: moduloCreateManyCursoInputEnvelope
    connect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
  }

  export type turmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput> | turmaCreateWithoutCursoInput[] | turmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutCursoInput | turmaCreateOrConnectWithoutCursoInput[]
    createMany?: turmaCreateManyCursoInputEnvelope
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
  }

  export type moduloUpdateManyWithoutCursoNestedInput = {
    create?: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput> | moduloCreateWithoutCursoInput[] | moduloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: moduloCreateOrConnectWithoutCursoInput | moduloCreateOrConnectWithoutCursoInput[]
    upsert?: moduloUpsertWithWhereUniqueWithoutCursoInput | moduloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: moduloCreateManyCursoInputEnvelope
    set?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    disconnect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    delete?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    connect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    update?: moduloUpdateWithWhereUniqueWithoutCursoInput | moduloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: moduloUpdateManyWithWhereWithoutCursoInput | moduloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: moduloScalarWhereInput | moduloScalarWhereInput[]
  }

  export type turmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput> | turmaCreateWithoutCursoInput[] | turmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutCursoInput | turmaCreateOrConnectWithoutCursoInput[]
    upsert?: turmaUpsertWithWhereUniqueWithoutCursoInput | turmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: turmaCreateManyCursoInputEnvelope
    set?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    disconnect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    delete?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    update?: turmaUpdateWithWhereUniqueWithoutCursoInput | turmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: turmaUpdateManyWithWhereWithoutCursoInput | turmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: turmaScalarWhereInput | turmaScalarWhereInput[]
  }

  export type moduloUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput> | moduloCreateWithoutCursoInput[] | moduloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: moduloCreateOrConnectWithoutCursoInput | moduloCreateOrConnectWithoutCursoInput[]
    upsert?: moduloUpsertWithWhereUniqueWithoutCursoInput | moduloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: moduloCreateManyCursoInputEnvelope
    set?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    disconnect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    delete?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    connect?: moduloWhereUniqueInput | moduloWhereUniqueInput[]
    update?: moduloUpdateWithWhereUniqueWithoutCursoInput | moduloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: moduloUpdateManyWithWhereWithoutCursoInput | moduloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: moduloScalarWhereInput | moduloScalarWhereInput[]
  }

  export type turmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput> | turmaCreateWithoutCursoInput[] | turmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutCursoInput | turmaCreateOrConnectWithoutCursoInput[]
    upsert?: turmaUpsertWithWhereUniqueWithoutCursoInput | turmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: turmaCreateManyCursoInputEnvelope
    set?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    disconnect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    delete?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    update?: turmaUpdateWithWhereUniqueWithoutCursoInput | turmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: turmaUpdateManyWithWhereWithoutCursoInput | turmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: turmaScalarWhereInput | turmaScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutFormapagamentoInput = {
    create?: XOR<usuarioCreateWithoutFormapagamentoInput, usuarioUncheckedCreateWithoutFormapagamentoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFormapagamentoInput
    connect?: usuarioWhereUniqueInput
  }

  export type Enumformapagamento_tipoFieldUpdateOperationsInput = {
    set?: $Enums.formapagamento_tipo
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutFormapagamentoNestedInput = {
    create?: XOR<usuarioCreateWithoutFormapagamentoInput, usuarioUncheckedCreateWithoutFormapagamentoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFormapagamentoInput
    upsert?: usuarioUpsertWithoutFormapagamentoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutFormapagamentoInput, usuarioUpdateWithoutFormapagamentoInput>, usuarioUncheckedUpdateWithoutFormapagamentoInput>
  }

  export type apostilaCreateNestedManyWithoutModuloInput = {
    create?: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput> | apostilaCreateWithoutModuloInput[] | apostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: apostilaCreateOrConnectWithoutModuloInput | apostilaCreateOrConnectWithoutModuloInput[]
    createMany?: apostilaCreateManyModuloInputEnvelope
    connect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
  }

  export type avaliacaoCreateNestedManyWithoutModuloInput = {
    create?: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput> | avaliacaoCreateWithoutModuloInput[] | avaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutModuloInput | avaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: avaliacaoCreateManyModuloInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type cursoCreateNestedOneWithoutModuloInput = {
    create?: XOR<cursoCreateWithoutModuloInput, cursoUncheckedCreateWithoutModuloInput>
    connectOrCreate?: cursoCreateOrConnectWithoutModuloInput
    connect?: cursoWhereUniqueInput
  }

  export type videoCreateNestedManyWithoutModuloInput = {
    create?: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput> | videoCreateWithoutModuloInput[] | videoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: videoCreateOrConnectWithoutModuloInput | videoCreateOrConnectWithoutModuloInput[]
    createMany?: videoCreateManyModuloInputEnvelope
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[]
  }

  export type apostilaUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput> | apostilaCreateWithoutModuloInput[] | apostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: apostilaCreateOrConnectWithoutModuloInput | apostilaCreateOrConnectWithoutModuloInput[]
    createMany?: apostilaCreateManyModuloInputEnvelope
    connect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
  }

  export type avaliacaoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput> | avaliacaoCreateWithoutModuloInput[] | avaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutModuloInput | avaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: avaliacaoCreateManyModuloInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type videoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput> | videoCreateWithoutModuloInput[] | videoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: videoCreateOrConnectWithoutModuloInput | videoCreateOrConnectWithoutModuloInput[]
    createMany?: videoCreateManyModuloInputEnvelope
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[]
  }

  export type apostilaUpdateManyWithoutModuloNestedInput = {
    create?: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput> | apostilaCreateWithoutModuloInput[] | apostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: apostilaCreateOrConnectWithoutModuloInput | apostilaCreateOrConnectWithoutModuloInput[]
    upsert?: apostilaUpsertWithWhereUniqueWithoutModuloInput | apostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: apostilaCreateManyModuloInputEnvelope
    set?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    disconnect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    delete?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    connect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    update?: apostilaUpdateWithWhereUniqueWithoutModuloInput | apostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: apostilaUpdateManyWithWhereWithoutModuloInput | apostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: apostilaScalarWhereInput | apostilaScalarWhereInput[]
  }

  export type avaliacaoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput> | avaliacaoCreateWithoutModuloInput[] | avaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutModuloInput | avaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutModuloInput | avaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: avaliacaoCreateManyModuloInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutModuloInput | avaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutModuloInput | avaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type cursoUpdateOneRequiredWithoutModuloNestedInput = {
    create?: XOR<cursoCreateWithoutModuloInput, cursoUncheckedCreateWithoutModuloInput>
    connectOrCreate?: cursoCreateOrConnectWithoutModuloInput
    upsert?: cursoUpsertWithoutModuloInput
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutModuloInput, cursoUpdateWithoutModuloInput>, cursoUncheckedUpdateWithoutModuloInput>
  }

  export type videoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput> | videoCreateWithoutModuloInput[] | videoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: videoCreateOrConnectWithoutModuloInput | videoCreateOrConnectWithoutModuloInput[]
    upsert?: videoUpsertWithWhereUniqueWithoutModuloInput | videoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: videoCreateManyModuloInputEnvelope
    set?: videoWhereUniqueInput | videoWhereUniqueInput[]
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[]
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[]
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[]
    update?: videoUpdateWithWhereUniqueWithoutModuloInput | videoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: videoUpdateManyWithWhereWithoutModuloInput | videoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[]
  }

  export type apostilaUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput> | apostilaCreateWithoutModuloInput[] | apostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: apostilaCreateOrConnectWithoutModuloInput | apostilaCreateOrConnectWithoutModuloInput[]
    upsert?: apostilaUpsertWithWhereUniqueWithoutModuloInput | apostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: apostilaCreateManyModuloInputEnvelope
    set?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    disconnect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    delete?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    connect?: apostilaWhereUniqueInput | apostilaWhereUniqueInput[]
    update?: apostilaUpdateWithWhereUniqueWithoutModuloInput | apostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: apostilaUpdateManyWithWhereWithoutModuloInput | apostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: apostilaScalarWhereInput | apostilaScalarWhereInput[]
  }

  export type avaliacaoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput> | avaliacaoCreateWithoutModuloInput[] | avaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutModuloInput | avaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutModuloInput | avaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: avaliacaoCreateManyModuloInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutModuloInput | avaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutModuloInput | avaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type videoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput> | videoCreateWithoutModuloInput[] | videoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: videoCreateOrConnectWithoutModuloInput | videoCreateOrConnectWithoutModuloInput[]
    upsert?: videoUpsertWithWhereUniqueWithoutModuloInput | videoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: videoCreateManyModuloInputEnvelope
    set?: videoWhereUniqueInput | videoWhereUniqueInput[]
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[]
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[]
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[]
    update?: videoUpdateWithWhereUniqueWithoutModuloInput | videoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: videoUpdateManyWithWhereWithoutModuloInput | videoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutParceriaInput = {
    create?: XOR<usuarioCreateWithoutParceriaInput, usuarioUncheckedCreateWithoutParceriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutParceriaInput
    connect?: usuarioWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usuarioUpdateOneRequiredWithoutParceriaNestedInput = {
    create?: XOR<usuarioCreateWithoutParceriaInput, usuarioUncheckedCreateWithoutParceriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutParceriaInput
    upsert?: usuarioUpsertWithoutParceriaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutParceriaInput, usuarioUpdateWithoutParceriaInput>, usuarioUncheckedUpdateWithoutParceriaInput>
  }

  export type usuarioCreateNestedManyWithoutPlanoInput = {
    create?: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput> | usuarioCreateWithoutPlanoInput[] | usuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPlanoInput | usuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: usuarioCreateManyPlanoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutPlanoInput = {
    create?: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput> | usuarioCreateWithoutPlanoInput[] | usuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPlanoInput | usuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: usuarioCreateManyPlanoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput> | usuarioCreateWithoutPlanoInput[] | usuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPlanoInput | usuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutPlanoInput | usuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: usuarioCreateManyPlanoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutPlanoInput | usuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutPlanoInput | usuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput> | usuarioCreateWithoutPlanoInput[] | usuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutPlanoInput | usuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutPlanoInput | usuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: usuarioCreateManyPlanoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutPlanoInput | usuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutPlanoInput | usuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutProgressoapostilaInput = {
    create?: XOR<usuarioCreateWithoutProgressoapostilaInput, usuarioUncheckedCreateWithoutProgressoapostilaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressoapostilaInput
    connect?: usuarioWhereUniqueInput
  }

  export type apostilaCreateNestedOneWithoutProgressoapostilaInput = {
    create?: XOR<apostilaCreateWithoutProgressoapostilaInput, apostilaUncheckedCreateWithoutProgressoapostilaInput>
    connectOrCreate?: apostilaCreateOrConnectWithoutProgressoapostilaInput
    connect?: apostilaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuarioUpdateOneRequiredWithoutProgressoapostilaNestedInput = {
    create?: XOR<usuarioCreateWithoutProgressoapostilaInput, usuarioUncheckedCreateWithoutProgressoapostilaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressoapostilaInput
    upsert?: usuarioUpsertWithoutProgressoapostilaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProgressoapostilaInput, usuarioUpdateWithoutProgressoapostilaInput>, usuarioUncheckedUpdateWithoutProgressoapostilaInput>
  }

  export type apostilaUpdateOneRequiredWithoutProgressoapostilaNestedInput = {
    create?: XOR<apostilaCreateWithoutProgressoapostilaInput, apostilaUncheckedCreateWithoutProgressoapostilaInput>
    connectOrCreate?: apostilaCreateOrConnectWithoutProgressoapostilaInput
    upsert?: apostilaUpsertWithoutProgressoapostilaInput
    connect?: apostilaWhereUniqueInput
    update?: XOR<XOR<apostilaUpdateToOneWithWhereWithoutProgressoapostilaInput, apostilaUpdateWithoutProgressoapostilaInput>, apostilaUncheckedUpdateWithoutProgressoapostilaInput>
  }

  export type usuarioCreateNestedOneWithoutProgressoavaliacaoInput = {
    create?: XOR<usuarioCreateWithoutProgressoavaliacaoInput, usuarioUncheckedCreateWithoutProgressoavaliacaoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressoavaliacaoInput
    connect?: usuarioWhereUniqueInput
  }

  export type avaliacaoCreateNestedOneWithoutProgressoavaliacaoInput = {
    create?: XOR<avaliacaoCreateWithoutProgressoavaliacaoInput, avaliacaoUncheckedCreateWithoutProgressoavaliacaoInput>
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProgressoavaliacaoInput
    connect?: avaliacaoWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutProgressoavaliacaoNestedInput = {
    create?: XOR<usuarioCreateWithoutProgressoavaliacaoInput, usuarioUncheckedCreateWithoutProgressoavaliacaoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressoavaliacaoInput
    upsert?: usuarioUpsertWithoutProgressoavaliacaoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProgressoavaliacaoInput, usuarioUpdateWithoutProgressoavaliacaoInput>, usuarioUncheckedUpdateWithoutProgressoavaliacaoInput>
  }

  export type avaliacaoUpdateOneRequiredWithoutProgressoavaliacaoNestedInput = {
    create?: XOR<avaliacaoCreateWithoutProgressoavaliacaoInput, avaliacaoUncheckedCreateWithoutProgressoavaliacaoInput>
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProgressoavaliacaoInput
    upsert?: avaliacaoUpsertWithoutProgressoavaliacaoInput
    connect?: avaliacaoWhereUniqueInput
    update?: XOR<XOR<avaliacaoUpdateToOneWithWhereWithoutProgressoavaliacaoInput, avaliacaoUpdateWithoutProgressoavaliacaoInput>, avaliacaoUncheckedUpdateWithoutProgressoavaliacaoInput>
  }

  export type usuarioCreateNestedOneWithoutProgressovideoInput = {
    create?: XOR<usuarioCreateWithoutProgressovideoInput, usuarioUncheckedCreateWithoutProgressovideoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressovideoInput
    connect?: usuarioWhereUniqueInput
  }

  export type videoCreateNestedOneWithoutProgressovideoInput = {
    create?: XOR<videoCreateWithoutProgressovideoInput, videoUncheckedCreateWithoutProgressovideoInput>
    connectOrCreate?: videoCreateOrConnectWithoutProgressovideoInput
    connect?: videoWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutProgressovideoNestedInput = {
    create?: XOR<usuarioCreateWithoutProgressovideoInput, usuarioUncheckedCreateWithoutProgressovideoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgressovideoInput
    upsert?: usuarioUpsertWithoutProgressovideoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProgressovideoInput, usuarioUpdateWithoutProgressovideoInput>, usuarioUncheckedUpdateWithoutProgressovideoInput>
  }

  export type videoUpdateOneRequiredWithoutProgressovideoNestedInput = {
    create?: XOR<videoCreateWithoutProgressovideoInput, videoUncheckedCreateWithoutProgressovideoInput>
    connectOrCreate?: videoCreateOrConnectWithoutProgressovideoInput
    upsert?: videoUpsertWithoutProgressovideoInput
    connect?: videoWhereUniqueInput
    update?: XOR<XOR<videoUpdateToOneWithWhereWithoutProgressovideoInput, videoUpdateWithoutProgressovideoInput>, videoUncheckedUpdateWithoutProgressovideoInput>
  }

  export type alunoturmaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput> | alunoturmaCreateWithoutTurmaInput[] | alunoturmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutTurmaInput | alunoturmaCreateOrConnectWithoutTurmaInput[]
    createMany?: alunoturmaCreateManyTurmaInputEnvelope
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
  }

  export type cursoCreateNestedOneWithoutTurmaInput = {
    create?: XOR<cursoCreateWithoutTurmaInput, cursoUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: cursoCreateOrConnectWithoutTurmaInput
    connect?: cursoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutTurmaInput = {
    create?: XOR<usuarioCreateWithoutTurmaInput, usuarioUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTurmaInput
    connect?: usuarioWhereUniqueInput
  }

  export type alunoturmaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput> | alunoturmaCreateWithoutTurmaInput[] | alunoturmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutTurmaInput | alunoturmaCreateOrConnectWithoutTurmaInput[]
    createMany?: alunoturmaCreateManyTurmaInputEnvelope
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
  }

  export type alunoturmaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput> | alunoturmaCreateWithoutTurmaInput[] | alunoturmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutTurmaInput | alunoturmaCreateOrConnectWithoutTurmaInput[]
    upsert?: alunoturmaUpsertWithWhereUniqueWithoutTurmaInput | alunoturmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: alunoturmaCreateManyTurmaInputEnvelope
    set?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    disconnect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    delete?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    update?: alunoturmaUpdateWithWhereUniqueWithoutTurmaInput | alunoturmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: alunoturmaUpdateManyWithWhereWithoutTurmaInput | alunoturmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
  }

  export type cursoUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<cursoCreateWithoutTurmaInput, cursoUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: cursoCreateOrConnectWithoutTurmaInput
    upsert?: cursoUpsertWithoutTurmaInput
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutTurmaInput, cursoUpdateWithoutTurmaInput>, cursoUncheckedUpdateWithoutTurmaInput>
  }

  export type usuarioUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<usuarioCreateWithoutTurmaInput, usuarioUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTurmaInput
    upsert?: usuarioUpsertWithoutTurmaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutTurmaInput, usuarioUpdateWithoutTurmaInput>, usuarioUncheckedUpdateWithoutTurmaInput>
  }

  export type alunoturmaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput> | alunoturmaCreateWithoutTurmaInput[] | alunoturmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutTurmaInput | alunoturmaCreateOrConnectWithoutTurmaInput[]
    upsert?: alunoturmaUpsertWithWhereUniqueWithoutTurmaInput | alunoturmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: alunoturmaCreateManyTurmaInputEnvelope
    set?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    disconnect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    delete?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    update?: alunoturmaUpdateWithWhereUniqueWithoutTurmaInput | alunoturmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: alunoturmaUpdateManyWithWhereWithoutTurmaInput | alunoturmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
  }

  export type alunoturmaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput> | alunoturmaCreateWithoutUsuarioInput[] | alunoturmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutUsuarioInput | alunoturmaCreateOrConnectWithoutUsuarioInput[]
    createMany?: alunoturmaCreateManyUsuarioInputEnvelope
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
  }

  export type formapagamentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput> | formapagamentoCreateWithoutUsuarioInput[] | formapagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: formapagamentoCreateOrConnectWithoutUsuarioInput | formapagamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: formapagamentoCreateManyUsuarioInputEnvelope
    connect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
  }

  export type parceriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput> | parceriaCreateWithoutUsuarioInput[] | parceriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: parceriaCreateOrConnectWithoutUsuarioInput | parceriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: parceriaCreateManyUsuarioInputEnvelope
    connect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
  }

  export type progressoapostilaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput> | progressoapostilaCreateWithoutUsuarioInput[] | progressoapostilaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutUsuarioInput | progressoapostilaCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressoapostilaCreateManyUsuarioInputEnvelope
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
  }

  export type progressoavaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput> | progressoavaliacaoCreateWithoutUsuarioInput[] | progressoavaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutUsuarioInput | progressoavaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressoavaliacaoCreateManyUsuarioInputEnvelope
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
  }

  export type progressovideoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput> | progressovideoCreateWithoutUsuarioInput[] | progressovideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutUsuarioInput | progressovideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressovideoCreateManyUsuarioInputEnvelope
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
  }

  export type turmaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput> | turmaCreateWithoutUsuarioInput[] | turmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutUsuarioInput | turmaCreateOrConnectWithoutUsuarioInput[]
    createMany?: turmaCreateManyUsuarioInputEnvelope
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
  }

  export type planoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<planoCreateWithoutUsuarioInput, planoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: planoCreateOrConnectWithoutUsuarioInput
    connect?: planoWhereUniqueInput
  }

  export type alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput> | alunoturmaCreateWithoutUsuarioInput[] | alunoturmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutUsuarioInput | alunoturmaCreateOrConnectWithoutUsuarioInput[]
    createMany?: alunoturmaCreateManyUsuarioInputEnvelope
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
  }

  export type formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput> | formapagamentoCreateWithoutUsuarioInput[] | formapagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: formapagamentoCreateOrConnectWithoutUsuarioInput | formapagamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: formapagamentoCreateManyUsuarioInputEnvelope
    connect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
  }

  export type parceriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput> | parceriaCreateWithoutUsuarioInput[] | parceriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: parceriaCreateOrConnectWithoutUsuarioInput | parceriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: parceriaCreateManyUsuarioInputEnvelope
    connect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
  }

  export type progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput> | progressoapostilaCreateWithoutUsuarioInput[] | progressoapostilaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutUsuarioInput | progressoapostilaCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressoapostilaCreateManyUsuarioInputEnvelope
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
  }

  export type progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput> | progressoavaliacaoCreateWithoutUsuarioInput[] | progressoavaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutUsuarioInput | progressoavaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressoavaliacaoCreateManyUsuarioInputEnvelope
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
  }

  export type progressovideoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput> | progressovideoCreateWithoutUsuarioInput[] | progressovideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutUsuarioInput | progressovideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progressovideoCreateManyUsuarioInputEnvelope
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
  }

  export type turmaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput> | turmaCreateWithoutUsuarioInput[] | turmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutUsuarioInput | turmaCreateOrConnectWithoutUsuarioInput[]
    createMany?: turmaCreateManyUsuarioInputEnvelope
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
  }

  export type Enumusuario_tipoFieldUpdateOperationsInput = {
    set?: $Enums.usuario_tipo
  }

  export type alunoturmaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput> | alunoturmaCreateWithoutUsuarioInput[] | alunoturmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutUsuarioInput | alunoturmaCreateOrConnectWithoutUsuarioInput[]
    upsert?: alunoturmaUpsertWithWhereUniqueWithoutUsuarioInput | alunoturmaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: alunoturmaCreateManyUsuarioInputEnvelope
    set?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    disconnect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    delete?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    update?: alunoturmaUpdateWithWhereUniqueWithoutUsuarioInput | alunoturmaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: alunoturmaUpdateManyWithWhereWithoutUsuarioInput | alunoturmaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
  }

  export type formapagamentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput> | formapagamentoCreateWithoutUsuarioInput[] | formapagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: formapagamentoCreateOrConnectWithoutUsuarioInput | formapagamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: formapagamentoUpsertWithWhereUniqueWithoutUsuarioInput | formapagamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: formapagamentoCreateManyUsuarioInputEnvelope
    set?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    disconnect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    delete?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    connect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    update?: formapagamentoUpdateWithWhereUniqueWithoutUsuarioInput | formapagamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: formapagamentoUpdateManyWithWhereWithoutUsuarioInput | formapagamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: formapagamentoScalarWhereInput | formapagamentoScalarWhereInput[]
  }

  export type parceriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput> | parceriaCreateWithoutUsuarioInput[] | parceriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: parceriaCreateOrConnectWithoutUsuarioInput | parceriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: parceriaUpsertWithWhereUniqueWithoutUsuarioInput | parceriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: parceriaCreateManyUsuarioInputEnvelope
    set?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    disconnect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    delete?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    connect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    update?: parceriaUpdateWithWhereUniqueWithoutUsuarioInput | parceriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: parceriaUpdateManyWithWhereWithoutUsuarioInput | parceriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: parceriaScalarWhereInput | parceriaScalarWhereInput[]
  }

  export type progressoapostilaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput> | progressoapostilaCreateWithoutUsuarioInput[] | progressoapostilaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutUsuarioInput | progressoapostilaCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressoapostilaUpsertWithWhereUniqueWithoutUsuarioInput | progressoapostilaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressoapostilaCreateManyUsuarioInputEnvelope
    set?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    disconnect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    delete?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    update?: progressoapostilaUpdateWithWhereUniqueWithoutUsuarioInput | progressoapostilaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressoapostilaUpdateManyWithWhereWithoutUsuarioInput | progressoapostilaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
  }

  export type progressoavaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput> | progressoavaliacaoCreateWithoutUsuarioInput[] | progressoavaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutUsuarioInput | progressoavaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressoavaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | progressoavaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressoavaliacaoCreateManyUsuarioInputEnvelope
    set?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    disconnect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    delete?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    update?: progressoavaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | progressoavaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressoavaliacaoUpdateManyWithWhereWithoutUsuarioInput | progressoavaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
  }

  export type progressovideoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput> | progressovideoCreateWithoutUsuarioInput[] | progressovideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutUsuarioInput | progressovideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressovideoUpsertWithWhereUniqueWithoutUsuarioInput | progressovideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressovideoCreateManyUsuarioInputEnvelope
    set?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    disconnect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    delete?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    update?: progressovideoUpdateWithWhereUniqueWithoutUsuarioInput | progressovideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressovideoUpdateManyWithWhereWithoutUsuarioInput | progressovideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
  }

  export type turmaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput> | turmaCreateWithoutUsuarioInput[] | turmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutUsuarioInput | turmaCreateOrConnectWithoutUsuarioInput[]
    upsert?: turmaUpsertWithWhereUniqueWithoutUsuarioInput | turmaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: turmaCreateManyUsuarioInputEnvelope
    set?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    disconnect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    delete?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    update?: turmaUpdateWithWhereUniqueWithoutUsuarioInput | turmaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: turmaUpdateManyWithWhereWithoutUsuarioInput | turmaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: turmaScalarWhereInput | turmaScalarWhereInput[]
  }

  export type planoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<planoCreateWithoutUsuarioInput, planoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: planoCreateOrConnectWithoutUsuarioInput
    upsert?: planoUpsertWithoutUsuarioInput
    disconnect?: planoWhereInput | boolean
    delete?: planoWhereInput | boolean
    connect?: planoWhereUniqueInput
    update?: XOR<XOR<planoUpdateToOneWithWhereWithoutUsuarioInput, planoUpdateWithoutUsuarioInput>, planoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput> | alunoturmaCreateWithoutUsuarioInput[] | alunoturmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: alunoturmaCreateOrConnectWithoutUsuarioInput | alunoturmaCreateOrConnectWithoutUsuarioInput[]
    upsert?: alunoturmaUpsertWithWhereUniqueWithoutUsuarioInput | alunoturmaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: alunoturmaCreateManyUsuarioInputEnvelope
    set?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    disconnect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    delete?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    connect?: alunoturmaWhereUniqueInput | alunoturmaWhereUniqueInput[]
    update?: alunoturmaUpdateWithWhereUniqueWithoutUsuarioInput | alunoturmaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: alunoturmaUpdateManyWithWhereWithoutUsuarioInput | alunoturmaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
  }

  export type formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput> | formapagamentoCreateWithoutUsuarioInput[] | formapagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: formapagamentoCreateOrConnectWithoutUsuarioInput | formapagamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: formapagamentoUpsertWithWhereUniqueWithoutUsuarioInput | formapagamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: formapagamentoCreateManyUsuarioInputEnvelope
    set?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    disconnect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    delete?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    connect?: formapagamentoWhereUniqueInput | formapagamentoWhereUniqueInput[]
    update?: formapagamentoUpdateWithWhereUniqueWithoutUsuarioInput | formapagamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: formapagamentoUpdateManyWithWhereWithoutUsuarioInput | formapagamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: formapagamentoScalarWhereInput | formapagamentoScalarWhereInput[]
  }

  export type parceriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput> | parceriaCreateWithoutUsuarioInput[] | parceriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: parceriaCreateOrConnectWithoutUsuarioInput | parceriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: parceriaUpsertWithWhereUniqueWithoutUsuarioInput | parceriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: parceriaCreateManyUsuarioInputEnvelope
    set?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    disconnect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    delete?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    connect?: parceriaWhereUniqueInput | parceriaWhereUniqueInput[]
    update?: parceriaUpdateWithWhereUniqueWithoutUsuarioInput | parceriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: parceriaUpdateManyWithWhereWithoutUsuarioInput | parceriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: parceriaScalarWhereInput | parceriaScalarWhereInput[]
  }

  export type progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput> | progressoapostilaCreateWithoutUsuarioInput[] | progressoapostilaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoapostilaCreateOrConnectWithoutUsuarioInput | progressoapostilaCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressoapostilaUpsertWithWhereUniqueWithoutUsuarioInput | progressoapostilaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressoapostilaCreateManyUsuarioInputEnvelope
    set?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    disconnect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    delete?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    connect?: progressoapostilaWhereUniqueInput | progressoapostilaWhereUniqueInput[]
    update?: progressoapostilaUpdateWithWhereUniqueWithoutUsuarioInput | progressoapostilaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressoapostilaUpdateManyWithWhereWithoutUsuarioInput | progressoapostilaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
  }

  export type progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput> | progressoavaliacaoCreateWithoutUsuarioInput[] | progressoavaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressoavaliacaoCreateOrConnectWithoutUsuarioInput | progressoavaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressoavaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | progressoavaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressoavaliacaoCreateManyUsuarioInputEnvelope
    set?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    disconnect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    delete?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    connect?: progressoavaliacaoWhereUniqueInput | progressoavaliacaoWhereUniqueInput[]
    update?: progressoavaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | progressoavaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressoavaliacaoUpdateManyWithWhereWithoutUsuarioInput | progressoavaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
  }

  export type progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput> | progressovideoCreateWithoutUsuarioInput[] | progressovideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutUsuarioInput | progressovideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progressovideoUpsertWithWhereUniqueWithoutUsuarioInput | progressovideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progressovideoCreateManyUsuarioInputEnvelope
    set?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    disconnect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    delete?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    update?: progressovideoUpdateWithWhereUniqueWithoutUsuarioInput | progressovideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progressovideoUpdateManyWithWhereWithoutUsuarioInput | progressovideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
  }

  export type turmaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput> | turmaCreateWithoutUsuarioInput[] | turmaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: turmaCreateOrConnectWithoutUsuarioInput | turmaCreateOrConnectWithoutUsuarioInput[]
    upsert?: turmaUpsertWithWhereUniqueWithoutUsuarioInput | turmaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: turmaCreateManyUsuarioInputEnvelope
    set?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    disconnect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    delete?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    connect?: turmaWhereUniqueInput | turmaWhereUniqueInput[]
    update?: turmaUpdateWithWhereUniqueWithoutUsuarioInput | turmaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: turmaUpdateManyWithWhereWithoutUsuarioInput | turmaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: turmaScalarWhereInput | turmaScalarWhereInput[]
  }

  export type progressovideoCreateNestedManyWithoutVideoInput = {
    create?: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput> | progressovideoCreateWithoutVideoInput[] | progressovideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutVideoInput | progressovideoCreateOrConnectWithoutVideoInput[]
    createMany?: progressovideoCreateManyVideoInputEnvelope
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
  }

  export type moduloCreateNestedOneWithoutVideoInput = {
    create?: XOR<moduloCreateWithoutVideoInput, moduloUncheckedCreateWithoutVideoInput>
    connectOrCreate?: moduloCreateOrConnectWithoutVideoInput
    connect?: moduloWhereUniqueInput
  }

  export type progressovideoUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput> | progressovideoCreateWithoutVideoInput[] | progressovideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutVideoInput | progressovideoCreateOrConnectWithoutVideoInput[]
    createMany?: progressovideoCreateManyVideoInputEnvelope
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
  }

  export type progressovideoUpdateManyWithoutVideoNestedInput = {
    create?: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput> | progressovideoCreateWithoutVideoInput[] | progressovideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutVideoInput | progressovideoCreateOrConnectWithoutVideoInput[]
    upsert?: progressovideoUpsertWithWhereUniqueWithoutVideoInput | progressovideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: progressovideoCreateManyVideoInputEnvelope
    set?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    disconnect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    delete?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    update?: progressovideoUpdateWithWhereUniqueWithoutVideoInput | progressovideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: progressovideoUpdateManyWithWhereWithoutVideoInput | progressovideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
  }

  export type moduloUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<moduloCreateWithoutVideoInput, moduloUncheckedCreateWithoutVideoInput>
    connectOrCreate?: moduloCreateOrConnectWithoutVideoInput
    upsert?: moduloUpsertWithoutVideoInput
    connect?: moduloWhereUniqueInput
    update?: XOR<XOR<moduloUpdateToOneWithWhereWithoutVideoInput, moduloUpdateWithoutVideoInput>, moduloUncheckedUpdateWithoutVideoInput>
  }

  export type progressovideoUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput> | progressovideoCreateWithoutVideoInput[] | progressovideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: progressovideoCreateOrConnectWithoutVideoInput | progressovideoCreateOrConnectWithoutVideoInput[]
    upsert?: progressovideoUpsertWithWhereUniqueWithoutVideoInput | progressovideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: progressovideoCreateManyVideoInputEnvelope
    set?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    disconnect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    delete?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    connect?: progressovideoWhereUniqueInput | progressovideoWhereUniqueInput[]
    update?: progressovideoUpdateWithWhereUniqueWithoutVideoInput | progressovideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: progressovideoUpdateManyWithWhereWithoutVideoInput | progressovideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumformapagamento_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.formapagamento_tipo | Enumformapagamento_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.formapagamento_tipo[]
    notIn?: $Enums.formapagamento_tipo[]
    not?: NestedEnumformapagamento_tipoFilter<$PrismaModel> | $Enums.formapagamento_tipo
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumformapagamento_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.formapagamento_tipo | Enumformapagamento_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.formapagamento_tipo[]
    notIn?: $Enums.formapagamento_tipo[]
    not?: NestedEnumformapagamento_tipoWithAggregatesFilter<$PrismaModel> | $Enums.formapagamento_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumformapagamento_tipoFilter<$PrismaModel>
    _max?: NestedEnumformapagamento_tipoFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumusuario_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoFilter<$PrismaModel> | $Enums.usuario_tipo
  }

  export type NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo | Enumusuario_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo[]
    notIn?: $Enums.usuario_tipo[]
    not?: NestedEnumusuario_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usuarioCreateWithoutAlunoturmaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAlunoturmaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutAlunoturmaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAlunoturmaInput, usuarioUncheckedCreateWithoutAlunoturmaInput>
  }

  export type turmaCreateWithoutAlunoturmaInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    curso: cursoCreateNestedOneWithoutTurmaInput
    usuario: usuarioCreateNestedOneWithoutTurmaInput
  }

  export type turmaUncheckedCreateWithoutAlunoturmaInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type turmaCreateOrConnectWithoutAlunoturmaInput = {
    where: turmaWhereUniqueInput
    create: XOR<turmaCreateWithoutAlunoturmaInput, turmaUncheckedCreateWithoutAlunoturmaInput>
  }

  export type usuarioUpsertWithoutAlunoturmaInput = {
    update: XOR<usuarioUpdateWithoutAlunoturmaInput, usuarioUncheckedUpdateWithoutAlunoturmaInput>
    create: XOR<usuarioCreateWithoutAlunoturmaInput, usuarioUncheckedCreateWithoutAlunoturmaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAlunoturmaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAlunoturmaInput, usuarioUncheckedUpdateWithoutAlunoturmaInput>
  }

  export type usuarioUpdateWithoutAlunoturmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAlunoturmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type turmaUpsertWithoutAlunoturmaInput = {
    update: XOR<turmaUpdateWithoutAlunoturmaInput, turmaUncheckedUpdateWithoutAlunoturmaInput>
    create: XOR<turmaCreateWithoutAlunoturmaInput, turmaUncheckedCreateWithoutAlunoturmaInput>
    where?: turmaWhereInput
  }

  export type turmaUpdateToOneWithWhereWithoutAlunoturmaInput = {
    where?: turmaWhereInput
    data: XOR<turmaUpdateWithoutAlunoturmaInput, turmaUncheckedUpdateWithoutAlunoturmaInput>
  }

  export type turmaUpdateWithoutAlunoturmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: cursoUpdateOneRequiredWithoutTurmaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateWithoutAlunoturmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduloCreateWithoutApostilaInput = {
    titulo: string
    ordem: number
    avaliacao?: avaliacaoCreateNestedManyWithoutModuloInput
    curso: cursoCreateNestedOneWithoutModuloInput
    video?: videoCreateNestedManyWithoutModuloInput
  }

  export type moduloUncheckedCreateWithoutApostilaInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutModuloInput
    video?: videoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type moduloCreateOrConnectWithoutApostilaInput = {
    where: moduloWhereUniqueInput
    create: XOR<moduloCreateWithoutApostilaInput, moduloUncheckedCreateWithoutApostilaInput>
  }

  export type progressoapostilaCreateWithoutApostilaInput = {
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressoapostilaInput
  }

  export type progressoapostilaUncheckedCreateWithoutApostilaInput = {
    alunoId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoapostilaCreateOrConnectWithoutApostilaInput = {
    where: progressoapostilaWhereUniqueInput
    create: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput>
  }

  export type progressoapostilaCreateManyApostilaInputEnvelope = {
    data: progressoapostilaCreateManyApostilaInput | progressoapostilaCreateManyApostilaInput[]
    skipDuplicates?: boolean
  }

  export type moduloUpsertWithoutApostilaInput = {
    update: XOR<moduloUpdateWithoutApostilaInput, moduloUncheckedUpdateWithoutApostilaInput>
    create: XOR<moduloCreateWithoutApostilaInput, moduloUncheckedCreateWithoutApostilaInput>
    where?: moduloWhereInput
  }

  export type moduloUpdateToOneWithWhereWithoutApostilaInput = {
    where?: moduloWhereInput
    data: XOR<moduloUpdateWithoutApostilaInput, moduloUncheckedUpdateWithoutApostilaInput>
  }

  export type moduloUpdateWithoutApostilaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUpdateManyWithoutModuloNestedInput
    curso?: cursoUpdateOneRequiredWithoutModuloNestedInput
    video?: videoUpdateManyWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateWithoutApostilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutModuloNestedInput
    video?: videoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type progressoapostilaUpsertWithWhereUniqueWithoutApostilaInput = {
    where: progressoapostilaWhereUniqueInput
    update: XOR<progressoapostilaUpdateWithoutApostilaInput, progressoapostilaUncheckedUpdateWithoutApostilaInput>
    create: XOR<progressoapostilaCreateWithoutApostilaInput, progressoapostilaUncheckedCreateWithoutApostilaInput>
  }

  export type progressoapostilaUpdateWithWhereUniqueWithoutApostilaInput = {
    where: progressoapostilaWhereUniqueInput
    data: XOR<progressoapostilaUpdateWithoutApostilaInput, progressoapostilaUncheckedUpdateWithoutApostilaInput>
  }

  export type progressoapostilaUpdateManyWithWhereWithoutApostilaInput = {
    where: progressoapostilaScalarWhereInput
    data: XOR<progressoapostilaUpdateManyMutationInput, progressoapostilaUncheckedUpdateManyWithoutApostilaInput>
  }

  export type progressoapostilaScalarWhereInput = {
    AND?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
    OR?: progressoapostilaScalarWhereInput[]
    NOT?: progressoapostilaScalarWhereInput | progressoapostilaScalarWhereInput[]
    alunoId?: IntFilter<"progressoapostila"> | number
    apostilaId?: IntFilter<"progressoapostila"> | number
    baixouApostila?: BoolFilter<"progressoapostila"> | boolean
    dataUltimaInteracao?: DateTimeFilter<"progressoapostila"> | Date | string
  }

  export type moduloCreateWithoutAvaliacaoInput = {
    titulo: string
    ordem: number
    apostila?: apostilaCreateNestedManyWithoutModuloInput
    curso: cursoCreateNestedOneWithoutModuloInput
    video?: videoCreateNestedManyWithoutModuloInput
  }

  export type moduloUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    apostila?: apostilaUncheckedCreateNestedManyWithoutModuloInput
    video?: videoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type moduloCreateOrConnectWithoutAvaliacaoInput = {
    where: moduloWhereUniqueInput
    create: XOR<moduloCreateWithoutAvaliacaoInput, moduloUncheckedCreateWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoCreateWithoutAvaliacaoInput = {
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressoavaliacaoInput
  }

  export type progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput = {
    alunoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoCreateOrConnectWithoutAvaliacaoInput = {
    where: progressoavaliacaoWhereUniqueInput
    create: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoCreateManyAvaliacaoInputEnvelope = {
    data: progressoavaliacaoCreateManyAvaliacaoInput | progressoavaliacaoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type moduloUpsertWithoutAvaliacaoInput = {
    update: XOR<moduloUpdateWithoutAvaliacaoInput, moduloUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<moduloCreateWithoutAvaliacaoInput, moduloUncheckedCreateWithoutAvaliacaoInput>
    where?: moduloWhereInput
  }

  export type moduloUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: moduloWhereInput
    data: XOR<moduloUpdateWithoutAvaliacaoInput, moduloUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type moduloUpdateWithoutAvaliacaoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUpdateManyWithoutModuloNestedInput
    curso?: cursoUpdateOneRequiredWithoutModuloNestedInput
    video?: videoUpdateManyWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUncheckedUpdateManyWithoutModuloNestedInput
    video?: videoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type progressoavaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: progressoavaliacaoWhereUniqueInput
    update: XOR<progressoavaliacaoUpdateWithoutAvaliacaoInput, progressoavaliacaoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<progressoavaliacaoCreateWithoutAvaliacaoInput, progressoavaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: progressoavaliacaoWhereUniqueInput
    data: XOR<progressoavaliacaoUpdateWithoutAvaliacaoInput, progressoavaliacaoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: progressoavaliacaoScalarWhereInput
    data: XOR<progressoavaliacaoUpdateManyMutationInput, progressoavaliacaoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type progressoavaliacaoScalarWhereInput = {
    AND?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
    OR?: progressoavaliacaoScalarWhereInput[]
    NOT?: progressoavaliacaoScalarWhereInput | progressoavaliacaoScalarWhereInput[]
    alunoId?: IntFilter<"progressoavaliacao"> | number
    avaliacaoId?: IntFilter<"progressoavaliacao"> | number
    notaAvaliacao?: DecimalFilter<"progressoavaliacao"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"progressoavaliacao"> | Date | string
  }

  export type moduloCreateWithoutCursoInput = {
    titulo: string
    ordem: number
    apostila?: apostilaCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoCreateNestedManyWithoutModuloInput
    video?: videoCreateNestedManyWithoutModuloInput
  }

  export type moduloUncheckedCreateWithoutCursoInput = {
    id?: number
    titulo: string
    ordem: number
    apostila?: apostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutModuloInput
    video?: videoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type moduloCreateOrConnectWithoutCursoInput = {
    where: moduloWhereUniqueInput
    create: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput>
  }

  export type moduloCreateManyCursoInputEnvelope = {
    data: moduloCreateManyCursoInput | moduloCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type turmaCreateWithoutCursoInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaCreateNestedManyWithoutTurmaInput
    usuario: usuarioCreateNestedOneWithoutTurmaInput
  }

  export type turmaUncheckedCreateWithoutCursoInput = {
    id?: number
    nome: string
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type turmaCreateOrConnectWithoutCursoInput = {
    where: turmaWhereUniqueInput
    create: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput>
  }

  export type turmaCreateManyCursoInputEnvelope = {
    data: turmaCreateManyCursoInput | turmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type moduloUpsertWithWhereUniqueWithoutCursoInput = {
    where: moduloWhereUniqueInput
    update: XOR<moduloUpdateWithoutCursoInput, moduloUncheckedUpdateWithoutCursoInput>
    create: XOR<moduloCreateWithoutCursoInput, moduloUncheckedCreateWithoutCursoInput>
  }

  export type moduloUpdateWithWhereUniqueWithoutCursoInput = {
    where: moduloWhereUniqueInput
    data: XOR<moduloUpdateWithoutCursoInput, moduloUncheckedUpdateWithoutCursoInput>
  }

  export type moduloUpdateManyWithWhereWithoutCursoInput = {
    where: moduloScalarWhereInput
    data: XOR<moduloUpdateManyMutationInput, moduloUncheckedUpdateManyWithoutCursoInput>
  }

  export type moduloScalarWhereInput = {
    AND?: moduloScalarWhereInput | moduloScalarWhereInput[]
    OR?: moduloScalarWhereInput[]
    NOT?: moduloScalarWhereInput | moduloScalarWhereInput[]
    id?: IntFilter<"modulo"> | number
    cursoId?: IntFilter<"modulo"> | number
    titulo?: StringFilter<"modulo"> | string
    ordem?: IntFilter<"modulo"> | number
  }

  export type turmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: turmaWhereUniqueInput
    update: XOR<turmaUpdateWithoutCursoInput, turmaUncheckedUpdateWithoutCursoInput>
    create: XOR<turmaCreateWithoutCursoInput, turmaUncheckedCreateWithoutCursoInput>
  }

  export type turmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: turmaWhereUniqueInput
    data: XOR<turmaUpdateWithoutCursoInput, turmaUncheckedUpdateWithoutCursoInput>
  }

  export type turmaUpdateManyWithWhereWithoutCursoInput = {
    where: turmaScalarWhereInput
    data: XOR<turmaUpdateManyMutationInput, turmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type turmaScalarWhereInput = {
    AND?: turmaScalarWhereInput | turmaScalarWhereInput[]
    OR?: turmaScalarWhereInput[]
    NOT?: turmaScalarWhereInput | turmaScalarWhereInput[]
    id?: IntFilter<"turma"> | number
    nome?: StringFilter<"turma"> | string
    cursoId?: IntFilter<"turma"> | number
    professorId?: IntFilter<"turma"> | number
    dataInicio?: DateTimeFilter<"turma"> | Date | string
    dataFim?: DateTimeFilter<"turma"> | Date | string
  }

  export type usuarioCreateWithoutFormapagamentoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutFormapagamentoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutFormapagamentoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutFormapagamentoInput, usuarioUncheckedCreateWithoutFormapagamentoInput>
  }

  export type usuarioUpsertWithoutFormapagamentoInput = {
    update: XOR<usuarioUpdateWithoutFormapagamentoInput, usuarioUncheckedUpdateWithoutFormapagamentoInput>
    create: XOR<usuarioCreateWithoutFormapagamentoInput, usuarioUncheckedCreateWithoutFormapagamentoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutFormapagamentoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutFormapagamentoInput, usuarioUncheckedUpdateWithoutFormapagamentoInput>
  }

  export type usuarioUpdateWithoutFormapagamentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutFormapagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type apostilaCreateWithoutModuloInput = {
    titulo: string
    arquivoUrl: string
    progressoapostila?: progressoapostilaCreateNestedManyWithoutApostilaInput
  }

  export type apostilaUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    arquivoUrl: string
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type apostilaCreateOrConnectWithoutModuloInput = {
    where: apostilaWhereUniqueInput
    create: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput>
  }

  export type apostilaCreateManyModuloInputEnvelope = {
    data: apostilaCreateManyModuloInput | apostilaCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type avaliacaoCreateWithoutModuloInput = {
    titulo: string
    descricao?: string | null
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    descricao?: string | null
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type avaliacaoCreateOrConnectWithoutModuloInput = {
    where: avaliacaoWhereUniqueInput
    create: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type avaliacaoCreateManyModuloInputEnvelope = {
    data: avaliacaoCreateManyModuloInput | avaliacaoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type cursoCreateWithoutModuloInput = {
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    turma?: turmaCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    turma?: turmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutModuloInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutModuloInput, cursoUncheckedCreateWithoutModuloInput>
  }

  export type videoCreateWithoutModuloInput = {
    titulo: string
    urlVideo: string
    duracao: number
    progressovideo?: progressovideoCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    urlVideo: string
    duracao: number
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoCreateOrConnectWithoutModuloInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput>
  }

  export type videoCreateManyModuloInputEnvelope = {
    data: videoCreateManyModuloInput | videoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type apostilaUpsertWithWhereUniqueWithoutModuloInput = {
    where: apostilaWhereUniqueInput
    update: XOR<apostilaUpdateWithoutModuloInput, apostilaUncheckedUpdateWithoutModuloInput>
    create: XOR<apostilaCreateWithoutModuloInput, apostilaUncheckedCreateWithoutModuloInput>
  }

  export type apostilaUpdateWithWhereUniqueWithoutModuloInput = {
    where: apostilaWhereUniqueInput
    data: XOR<apostilaUpdateWithoutModuloInput, apostilaUncheckedUpdateWithoutModuloInput>
  }

  export type apostilaUpdateManyWithWhereWithoutModuloInput = {
    where: apostilaScalarWhereInput
    data: XOR<apostilaUpdateManyMutationInput, apostilaUncheckedUpdateManyWithoutModuloInput>
  }

  export type apostilaScalarWhereInput = {
    AND?: apostilaScalarWhereInput | apostilaScalarWhereInput[]
    OR?: apostilaScalarWhereInput[]
    NOT?: apostilaScalarWhereInput | apostilaScalarWhereInput[]
    id?: IntFilter<"apostila"> | number
    moduloId?: IntFilter<"apostila"> | number
    titulo?: StringFilter<"apostila"> | string
    arquivoUrl?: StringFilter<"apostila"> | string
  }

  export type avaliacaoUpsertWithWhereUniqueWithoutModuloInput = {
    where: avaliacaoWhereUniqueInput
    update: XOR<avaliacaoUpdateWithoutModuloInput, avaliacaoUncheckedUpdateWithoutModuloInput>
    create: XOR<avaliacaoCreateWithoutModuloInput, avaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type avaliacaoUpdateWithWhereUniqueWithoutModuloInput = {
    where: avaliacaoWhereUniqueInput
    data: XOR<avaliacaoUpdateWithoutModuloInput, avaliacaoUncheckedUpdateWithoutModuloInput>
  }

  export type avaliacaoUpdateManyWithWhereWithoutModuloInput = {
    where: avaliacaoScalarWhereInput
    data: XOR<avaliacaoUpdateManyMutationInput, avaliacaoUncheckedUpdateManyWithoutModuloInput>
  }

  export type avaliacaoScalarWhereInput = {
    AND?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
    OR?: avaliacaoScalarWhereInput[]
    NOT?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
    id?: IntFilter<"avaliacao"> | number
    moduloId?: IntFilter<"avaliacao"> | number
    titulo?: StringFilter<"avaliacao"> | string
    descricao?: StringNullableFilter<"avaliacao"> | string | null
  }

  export type cursoUpsertWithoutModuloInput = {
    update: XOR<cursoUpdateWithoutModuloInput, cursoUncheckedUpdateWithoutModuloInput>
    create: XOR<cursoCreateWithoutModuloInput, cursoUncheckedCreateWithoutModuloInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutModuloInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutModuloInput, cursoUncheckedUpdateWithoutModuloInput>
  }

  export type cursoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turma?: turmaUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turma?: turmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type videoUpsertWithWhereUniqueWithoutModuloInput = {
    where: videoWhereUniqueInput
    update: XOR<videoUpdateWithoutModuloInput, videoUncheckedUpdateWithoutModuloInput>
    create: XOR<videoCreateWithoutModuloInput, videoUncheckedCreateWithoutModuloInput>
  }

  export type videoUpdateWithWhereUniqueWithoutModuloInput = {
    where: videoWhereUniqueInput
    data: XOR<videoUpdateWithoutModuloInput, videoUncheckedUpdateWithoutModuloInput>
  }

  export type videoUpdateManyWithWhereWithoutModuloInput = {
    where: videoScalarWhereInput
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyWithoutModuloInput>
  }

  export type videoScalarWhereInput = {
    AND?: videoScalarWhereInput | videoScalarWhereInput[]
    OR?: videoScalarWhereInput[]
    NOT?: videoScalarWhereInput | videoScalarWhereInput[]
    id?: IntFilter<"video"> | number
    moduloId?: IntFilter<"video"> | number
    titulo?: StringFilter<"video"> | string
    urlVideo?: StringFilter<"video"> | string
    duracao?: IntFilter<"video"> | number
  }

  export type usuarioCreateWithoutParceriaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutParceriaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutParceriaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutParceriaInput, usuarioUncheckedCreateWithoutParceriaInput>
  }

  export type usuarioUpsertWithoutParceriaInput = {
    update: XOR<usuarioUpdateWithoutParceriaInput, usuarioUncheckedUpdateWithoutParceriaInput>
    create: XOR<usuarioCreateWithoutParceriaInput, usuarioUncheckedCreateWithoutParceriaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutParceriaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutParceriaInput, usuarioUncheckedUpdateWithoutParceriaInput>
  }

  export type usuarioUpdateWithoutParceriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutParceriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateWithoutPlanoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPlanoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput>
  }

  export type usuarioCreateManyPlanoInputEnvelope = {
    data: usuarioCreateManyPlanoInput | usuarioCreateManyPlanoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithWhereUniqueWithoutPlanoInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutPlanoInput, usuarioUncheckedUpdateWithoutPlanoInput>
    create: XOR<usuarioCreateWithoutPlanoInput, usuarioUncheckedCreateWithoutPlanoInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutPlanoInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutPlanoInput, usuarioUncheckedUpdateWithoutPlanoInput>
  }

  export type usuarioUpdateManyWithWhereWithoutPlanoInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutPlanoInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: IntFilter<"usuario"> | number
    nome?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumusuario_tipoFilter<"usuario"> | $Enums.usuario_tipo
    dataCadastro?: DateTimeFilter<"usuario"> | Date | string
    planoId?: IntNullableFilter<"usuario"> | number | null
    cpf?: StringNullableFilter<"usuario"> | string | null
  }

  export type usuarioCreateWithoutProgressoapostilaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProgressoapostilaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProgressoapostilaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProgressoapostilaInput, usuarioUncheckedCreateWithoutProgressoapostilaInput>
  }

  export type apostilaCreateWithoutProgressoapostilaInput = {
    titulo: string
    arquivoUrl: string
    modulo: moduloCreateNestedOneWithoutApostilaInput
  }

  export type apostilaUncheckedCreateWithoutProgressoapostilaInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
  }

  export type apostilaCreateOrConnectWithoutProgressoapostilaInput = {
    where: apostilaWhereUniqueInput
    create: XOR<apostilaCreateWithoutProgressoapostilaInput, apostilaUncheckedCreateWithoutProgressoapostilaInput>
  }

  export type usuarioUpsertWithoutProgressoapostilaInput = {
    update: XOR<usuarioUpdateWithoutProgressoapostilaInput, usuarioUncheckedUpdateWithoutProgressoapostilaInput>
    create: XOR<usuarioCreateWithoutProgressoapostilaInput, usuarioUncheckedCreateWithoutProgressoapostilaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProgressoapostilaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProgressoapostilaInput, usuarioUncheckedUpdateWithoutProgressoapostilaInput>
  }

  export type usuarioUpdateWithoutProgressoapostilaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProgressoapostilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type apostilaUpsertWithoutProgressoapostilaInput = {
    update: XOR<apostilaUpdateWithoutProgressoapostilaInput, apostilaUncheckedUpdateWithoutProgressoapostilaInput>
    create: XOR<apostilaCreateWithoutProgressoapostilaInput, apostilaUncheckedCreateWithoutProgressoapostilaInput>
    where?: apostilaWhereInput
  }

  export type apostilaUpdateToOneWithWhereWithoutProgressoapostilaInput = {
    where?: apostilaWhereInput
    data: XOR<apostilaUpdateWithoutProgressoapostilaInput, apostilaUncheckedUpdateWithoutProgressoapostilaInput>
  }

  export type apostilaUpdateWithoutProgressoapostilaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    modulo?: moduloUpdateOneRequiredWithoutApostilaNestedInput
  }

  export type apostilaUncheckedUpdateWithoutProgressoapostilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateWithoutProgressoavaliacaoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProgressoavaliacaoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProgressoavaliacaoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProgressoavaliacaoInput, usuarioUncheckedCreateWithoutProgressoavaliacaoInput>
  }

  export type avaliacaoCreateWithoutProgressoavaliacaoInput = {
    titulo: string
    descricao?: string | null
    modulo: moduloCreateNestedOneWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateWithoutProgressoavaliacaoInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao?: string | null
  }

  export type avaliacaoCreateOrConnectWithoutProgressoavaliacaoInput = {
    where: avaliacaoWhereUniqueInput
    create: XOR<avaliacaoCreateWithoutProgressoavaliacaoInput, avaliacaoUncheckedCreateWithoutProgressoavaliacaoInput>
  }

  export type usuarioUpsertWithoutProgressoavaliacaoInput = {
    update: XOR<usuarioUpdateWithoutProgressoavaliacaoInput, usuarioUncheckedUpdateWithoutProgressoavaliacaoInput>
    create: XOR<usuarioCreateWithoutProgressoavaliacaoInput, usuarioUncheckedCreateWithoutProgressoavaliacaoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProgressoavaliacaoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProgressoavaliacaoInput, usuarioUncheckedUpdateWithoutProgressoavaliacaoInput>
  }

  export type usuarioUpdateWithoutProgressoavaliacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProgressoavaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type avaliacaoUpsertWithoutProgressoavaliacaoInput = {
    update: XOR<avaliacaoUpdateWithoutProgressoavaliacaoInput, avaliacaoUncheckedUpdateWithoutProgressoavaliacaoInput>
    create: XOR<avaliacaoCreateWithoutProgressoavaliacaoInput, avaliacaoUncheckedCreateWithoutProgressoavaliacaoInput>
    where?: avaliacaoWhereInput
  }

  export type avaliacaoUpdateToOneWithWhereWithoutProgressoavaliacaoInput = {
    where?: avaliacaoWhereInput
    data: XOR<avaliacaoUpdateWithoutProgressoavaliacaoInput, avaliacaoUncheckedUpdateWithoutProgressoavaliacaoInput>
  }

  export type avaliacaoUpdateWithoutProgressoavaliacaoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    modulo?: moduloUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateWithoutProgressoavaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateWithoutProgressovideoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    turma?: turmaCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProgressovideoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    turma?: turmaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProgressovideoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProgressovideoInput, usuarioUncheckedCreateWithoutProgressovideoInput>
  }

  export type videoCreateWithoutProgressovideoInput = {
    titulo: string
    urlVideo: string
    duracao: number
    modulo: moduloCreateNestedOneWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutProgressovideoInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type videoCreateOrConnectWithoutProgressovideoInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutProgressovideoInput, videoUncheckedCreateWithoutProgressovideoInput>
  }

  export type usuarioUpsertWithoutProgressovideoInput = {
    update: XOR<usuarioUpdateWithoutProgressovideoInput, usuarioUncheckedUpdateWithoutProgressovideoInput>
    create: XOR<usuarioCreateWithoutProgressovideoInput, usuarioUncheckedCreateWithoutProgressovideoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProgressovideoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProgressovideoInput, usuarioUncheckedUpdateWithoutProgressovideoInput>
  }

  export type usuarioUpdateWithoutProgressovideoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProgressovideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type videoUpsertWithoutProgressovideoInput = {
    update: XOR<videoUpdateWithoutProgressovideoInput, videoUncheckedUpdateWithoutProgressovideoInput>
    create: XOR<videoCreateWithoutProgressovideoInput, videoUncheckedCreateWithoutProgressovideoInput>
    where?: videoWhereInput
  }

  export type videoUpdateToOneWithWhereWithoutProgressovideoInput = {
    where?: videoWhereInput
    data: XOR<videoUpdateWithoutProgressovideoInput, videoUncheckedUpdateWithoutProgressovideoInput>
  }

  export type videoUpdateWithoutProgressovideoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    modulo?: moduloUpdateOneRequiredWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutProgressovideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type alunoturmaCreateWithoutTurmaInput = {
    usuario: usuarioCreateNestedOneWithoutAlunoturmaInput
  }

  export type alunoturmaUncheckedCreateWithoutTurmaInput = {
    alunoId: number
  }

  export type alunoturmaCreateOrConnectWithoutTurmaInput = {
    where: alunoturmaWhereUniqueInput
    create: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput>
  }

  export type alunoturmaCreateManyTurmaInputEnvelope = {
    data: alunoturmaCreateManyTurmaInput | alunoturmaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type cursoCreateWithoutTurmaInput = {
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    modulo?: moduloCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutTurmaInput = {
    id?: number
    titulo: string
    descricao?: string | null
    categoria: string
    cargaHoraria: number
    modulo?: moduloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutTurmaInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutTurmaInput, cursoUncheckedCreateWithoutTurmaInput>
  }

  export type usuarioCreateWithoutTurmaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
    alunoturma?: alunoturmaCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoCreateNestedManyWithoutUsuarioInput
    plano?: planoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutTurmaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    planoId?: number | null
    cpf?: string | null
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutUsuarioInput
    formapagamento?: formapagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    parceria?: parceriaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoapostila?: progressoapostilaUncheckedCreateNestedManyWithoutUsuarioInput
    progressoavaliacao?: progressoavaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    progressovideo?: progressovideoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutTurmaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutTurmaInput, usuarioUncheckedCreateWithoutTurmaInput>
  }

  export type alunoturmaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: alunoturmaWhereUniqueInput
    update: XOR<alunoturmaUpdateWithoutTurmaInput, alunoturmaUncheckedUpdateWithoutTurmaInput>
    create: XOR<alunoturmaCreateWithoutTurmaInput, alunoturmaUncheckedCreateWithoutTurmaInput>
  }

  export type alunoturmaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: alunoturmaWhereUniqueInput
    data: XOR<alunoturmaUpdateWithoutTurmaInput, alunoturmaUncheckedUpdateWithoutTurmaInput>
  }

  export type alunoturmaUpdateManyWithWhereWithoutTurmaInput = {
    where: alunoturmaScalarWhereInput
    data: XOR<alunoturmaUpdateManyMutationInput, alunoturmaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type alunoturmaScalarWhereInput = {
    AND?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
    OR?: alunoturmaScalarWhereInput[]
    NOT?: alunoturmaScalarWhereInput | alunoturmaScalarWhereInput[]
    alunoId?: IntFilter<"alunoturma"> | number
    turmaId?: IntFilter<"alunoturma"> | number
  }

  export type cursoUpsertWithoutTurmaInput = {
    update: XOR<cursoUpdateWithoutTurmaInput, cursoUncheckedUpdateWithoutTurmaInput>
    create: XOR<cursoCreateWithoutTurmaInput, cursoUncheckedCreateWithoutTurmaInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutTurmaInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutTurmaInput, cursoUncheckedUpdateWithoutTurmaInput>
  }

  export type cursoUpdateWithoutTurmaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulo?: moduloUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulo?: moduloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type usuarioUpsertWithoutTurmaInput = {
    update: XOR<usuarioUpdateWithoutTurmaInput, usuarioUncheckedUpdateWithoutTurmaInput>
    create: XOR<usuarioCreateWithoutTurmaInput, usuarioUncheckedCreateWithoutTurmaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutTurmaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutTurmaInput, usuarioUncheckedUpdateWithoutTurmaInput>
  }

  export type usuarioUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    plano?: planoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type alunoturmaCreateWithoutUsuarioInput = {
    turma: turmaCreateNestedOneWithoutAlunoturmaInput
  }

  export type alunoturmaUncheckedCreateWithoutUsuarioInput = {
    turmaId: number
  }

  export type alunoturmaCreateOrConnectWithoutUsuarioInput = {
    where: alunoturmaWhereUniqueInput
    create: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput>
  }

  export type alunoturmaCreateManyUsuarioInputEnvelope = {
    data: alunoturmaCreateManyUsuarioInput | alunoturmaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type formapagamentoCreateWithoutUsuarioInput = {
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    createdAt?: Date | string
    parcelas: number
  }

  export type formapagamentoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    createdAt?: Date | string
    parcelas: number
  }

  export type formapagamentoCreateOrConnectWithoutUsuarioInput = {
    where: formapagamentoWhereUniqueInput
    create: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type formapagamentoCreateManyUsuarioInputEnvelope = {
    data: formapagamentoCreateManyUsuarioInput | formapagamentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type parceriaCreateWithoutUsuarioInput = {
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type parceriaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type parceriaCreateOrConnectWithoutUsuarioInput = {
    where: parceriaWhereUniqueInput
    create: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput>
  }

  export type parceriaCreateManyUsuarioInputEnvelope = {
    data: parceriaCreateManyUsuarioInput | parceriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type progressoapostilaCreateWithoutUsuarioInput = {
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
    apostila: apostilaCreateNestedOneWithoutProgressoapostilaInput
  }

  export type progressoapostilaUncheckedCreateWithoutUsuarioInput = {
    apostilaId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoapostilaCreateOrConnectWithoutUsuarioInput = {
    where: progressoapostilaWhereUniqueInput
    create: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput>
  }

  export type progressoapostilaCreateManyUsuarioInputEnvelope = {
    data: progressoapostilaCreateManyUsuarioInput | progressoapostilaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type progressoavaliacaoCreateWithoutUsuarioInput = {
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    avaliacao: avaliacaoCreateNestedOneWithoutProgressoavaliacaoInput
  }

  export type progressoavaliacaoUncheckedCreateWithoutUsuarioInput = {
    avaliacaoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: progressoavaliacaoWhereUniqueInput
    create: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type progressoavaliacaoCreateManyUsuarioInputEnvelope = {
    data: progressoavaliacaoCreateManyUsuarioInput | progressoavaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type progressovideoCreateWithoutUsuarioInput = {
    progressoVideo: number
    dataUltimaInteracao: Date | string
    video: videoCreateNestedOneWithoutProgressovideoInput
  }

  export type progressovideoUncheckedCreateWithoutUsuarioInput = {
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type progressovideoCreateOrConnectWithoutUsuarioInput = {
    where: progressovideoWhereUniqueInput
    create: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput>
  }

  export type progressovideoCreateManyUsuarioInputEnvelope = {
    data: progressovideoCreateManyUsuarioInput | progressovideoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type turmaCreateWithoutUsuarioInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaCreateNestedManyWithoutTurmaInput
    curso: cursoCreateNestedOneWithoutTurmaInput
  }

  export type turmaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    cursoId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunoturma?: alunoturmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type turmaCreateOrConnectWithoutUsuarioInput = {
    where: turmaWhereUniqueInput
    create: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput>
  }

  export type turmaCreateManyUsuarioInputEnvelope = {
    data: turmaCreateManyUsuarioInput | turmaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type planoCreateWithoutUsuarioInput = {
    nome: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
  }

  export type planoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
  }

  export type planoCreateOrConnectWithoutUsuarioInput = {
    where: planoWhereUniqueInput
    create: XOR<planoCreateWithoutUsuarioInput, planoUncheckedCreateWithoutUsuarioInput>
  }

  export type alunoturmaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: alunoturmaWhereUniqueInput
    update: XOR<alunoturmaUpdateWithoutUsuarioInput, alunoturmaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<alunoturmaCreateWithoutUsuarioInput, alunoturmaUncheckedCreateWithoutUsuarioInput>
  }

  export type alunoturmaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: alunoturmaWhereUniqueInput
    data: XOR<alunoturmaUpdateWithoutUsuarioInput, alunoturmaUncheckedUpdateWithoutUsuarioInput>
  }

  export type alunoturmaUpdateManyWithWhereWithoutUsuarioInput = {
    where: alunoturmaScalarWhereInput
    data: XOR<alunoturmaUpdateManyMutationInput, alunoturmaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type formapagamentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: formapagamentoWhereUniqueInput
    update: XOR<formapagamentoUpdateWithoutUsuarioInput, formapagamentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<formapagamentoCreateWithoutUsuarioInput, formapagamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type formapagamentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: formapagamentoWhereUniqueInput
    data: XOR<formapagamentoUpdateWithoutUsuarioInput, formapagamentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type formapagamentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: formapagamentoScalarWhereInput
    data: XOR<formapagamentoUpdateManyMutationInput, formapagamentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type formapagamentoScalarWhereInput = {
    AND?: formapagamentoScalarWhereInput | formapagamentoScalarWhereInput[]
    OR?: formapagamentoScalarWhereInput[]
    NOT?: formapagamentoScalarWhereInput | formapagamentoScalarWhereInput[]
    id?: IntFilter<"formapagamento"> | number
    tipo?: Enumformapagamento_tipoFilter<"formapagamento"> | $Enums.formapagamento_tipo
    titular?: StringFilter<"formapagamento"> | string
    numero?: StringFilter<"formapagamento"> | string
    validade?: StringFilter<"formapagamento"> | string
    cvv?: StringNullableFilter<"formapagamento"> | string | null
    usuarioId?: IntFilter<"formapagamento"> | number
    createdAt?: DateTimeFilter<"formapagamento"> | Date | string
    parcelas?: IntFilter<"formapagamento"> | number
  }

  export type parceriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: parceriaWhereUniqueInput
    update: XOR<parceriaUpdateWithoutUsuarioInput, parceriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<parceriaCreateWithoutUsuarioInput, parceriaUncheckedCreateWithoutUsuarioInput>
  }

  export type parceriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: parceriaWhereUniqueInput
    data: XOR<parceriaUpdateWithoutUsuarioInput, parceriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type parceriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: parceriaScalarWhereInput
    data: XOR<parceriaUpdateManyMutationInput, parceriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type parceriaScalarWhereInput = {
    AND?: parceriaScalarWhereInput | parceriaScalarWhereInput[]
    OR?: parceriaScalarWhereInput[]
    NOT?: parceriaScalarWhereInput | parceriaScalarWhereInput[]
    id?: IntFilter<"parceria"> | number
    alunoId?: IntFilter<"parceria"> | number
    descricaoProjeto?: StringNullableFilter<"parceria"> | string | null
    percentualPlataforma?: DecimalFilter<"parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"parceria"> | Date | string
    contratoUrl?: StringFilter<"parceria"> | string
  }

  export type progressoapostilaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: progressoapostilaWhereUniqueInput
    update: XOR<progressoapostilaUpdateWithoutUsuarioInput, progressoapostilaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<progressoapostilaCreateWithoutUsuarioInput, progressoapostilaUncheckedCreateWithoutUsuarioInput>
  }

  export type progressoapostilaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: progressoapostilaWhereUniqueInput
    data: XOR<progressoapostilaUpdateWithoutUsuarioInput, progressoapostilaUncheckedUpdateWithoutUsuarioInput>
  }

  export type progressoapostilaUpdateManyWithWhereWithoutUsuarioInput = {
    where: progressoapostilaScalarWhereInput
    data: XOR<progressoapostilaUpdateManyMutationInput, progressoapostilaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type progressoavaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: progressoavaliacaoWhereUniqueInput
    update: XOR<progressoavaliacaoUpdateWithoutUsuarioInput, progressoavaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<progressoavaliacaoCreateWithoutUsuarioInput, progressoavaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type progressoavaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: progressoavaliacaoWhereUniqueInput
    data: XOR<progressoavaliacaoUpdateWithoutUsuarioInput, progressoavaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type progressoavaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: progressoavaliacaoScalarWhereInput
    data: XOR<progressoavaliacaoUpdateManyMutationInput, progressoavaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type progressovideoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: progressovideoWhereUniqueInput
    update: XOR<progressovideoUpdateWithoutUsuarioInput, progressovideoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<progressovideoCreateWithoutUsuarioInput, progressovideoUncheckedCreateWithoutUsuarioInput>
  }

  export type progressovideoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: progressovideoWhereUniqueInput
    data: XOR<progressovideoUpdateWithoutUsuarioInput, progressovideoUncheckedUpdateWithoutUsuarioInput>
  }

  export type progressovideoUpdateManyWithWhereWithoutUsuarioInput = {
    where: progressovideoScalarWhereInput
    data: XOR<progressovideoUpdateManyMutationInput, progressovideoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type progressovideoScalarWhereInput = {
    AND?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
    OR?: progressovideoScalarWhereInput[]
    NOT?: progressovideoScalarWhereInput | progressovideoScalarWhereInput[]
    alunoId?: IntFilter<"progressovideo"> | number
    videoId?: IntFilter<"progressovideo"> | number
    progressoVideo?: IntFilter<"progressovideo"> | number
    dataUltimaInteracao?: DateTimeFilter<"progressovideo"> | Date | string
  }

  export type turmaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: turmaWhereUniqueInput
    update: XOR<turmaUpdateWithoutUsuarioInput, turmaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<turmaCreateWithoutUsuarioInput, turmaUncheckedCreateWithoutUsuarioInput>
  }

  export type turmaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: turmaWhereUniqueInput
    data: XOR<turmaUpdateWithoutUsuarioInput, turmaUncheckedUpdateWithoutUsuarioInput>
  }

  export type turmaUpdateManyWithWhereWithoutUsuarioInput = {
    where: turmaScalarWhereInput
    data: XOR<turmaUpdateManyMutationInput, turmaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type planoUpsertWithoutUsuarioInput = {
    update: XOR<planoUpdateWithoutUsuarioInput, planoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<planoCreateWithoutUsuarioInput, planoUncheckedCreateWithoutUsuarioInput>
    where?: planoWhereInput
  }

  export type planoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: planoWhereInput
    data: XOR<planoUpdateWithoutUsuarioInput, planoUncheckedUpdateWithoutUsuarioInput>
  }

  export type planoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type planoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type progressovideoCreateWithoutVideoInput = {
    progressoVideo: number
    dataUltimaInteracao: Date | string
    usuario: usuarioCreateNestedOneWithoutProgressovideoInput
  }

  export type progressovideoUncheckedCreateWithoutVideoInput = {
    alunoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type progressovideoCreateOrConnectWithoutVideoInput = {
    where: progressovideoWhereUniqueInput
    create: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput>
  }

  export type progressovideoCreateManyVideoInputEnvelope = {
    data: progressovideoCreateManyVideoInput | progressovideoCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type moduloCreateWithoutVideoInput = {
    titulo: string
    ordem: number
    apostila?: apostilaCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoCreateNestedManyWithoutModuloInput
    curso: cursoCreateNestedOneWithoutModuloInput
  }

  export type moduloUncheckedCreateWithoutVideoInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    apostila?: apostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type moduloCreateOrConnectWithoutVideoInput = {
    where: moduloWhereUniqueInput
    create: XOR<moduloCreateWithoutVideoInput, moduloUncheckedCreateWithoutVideoInput>
  }

  export type progressovideoUpsertWithWhereUniqueWithoutVideoInput = {
    where: progressovideoWhereUniqueInput
    update: XOR<progressovideoUpdateWithoutVideoInput, progressovideoUncheckedUpdateWithoutVideoInput>
    create: XOR<progressovideoCreateWithoutVideoInput, progressovideoUncheckedCreateWithoutVideoInput>
  }

  export type progressovideoUpdateWithWhereUniqueWithoutVideoInput = {
    where: progressovideoWhereUniqueInput
    data: XOR<progressovideoUpdateWithoutVideoInput, progressovideoUncheckedUpdateWithoutVideoInput>
  }

  export type progressovideoUpdateManyWithWhereWithoutVideoInput = {
    where: progressovideoScalarWhereInput
    data: XOR<progressovideoUpdateManyMutationInput, progressovideoUncheckedUpdateManyWithoutVideoInput>
  }

  export type moduloUpsertWithoutVideoInput = {
    update: XOR<moduloUpdateWithoutVideoInput, moduloUncheckedUpdateWithoutVideoInput>
    create: XOR<moduloCreateWithoutVideoInput, moduloUncheckedCreateWithoutVideoInput>
    where?: moduloWhereInput
  }

  export type moduloUpdateToOneWithWhereWithoutVideoInput = {
    where?: moduloWhereInput
    data: XOR<moduloUpdateWithoutVideoInput, moduloUncheckedUpdateWithoutVideoInput>
  }

  export type moduloUpdateWithoutVideoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUpdateManyWithoutModuloNestedInput
    curso?: cursoUpdateOneRequiredWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type progressoapostilaCreateManyApostilaInput = {
    alunoId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoapostilaUpdateWithoutApostilaInput = {
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressoapostilaNestedInput
  }

  export type progressoapostilaUncheckedUpdateWithoutApostilaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoapostilaUncheckedUpdateManyWithoutApostilaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoCreateManyAvaliacaoInput = {
    alunoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoUpdateWithoutAvaliacaoInput = {
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressoavaliacaoNestedInput
  }

  export type progressoavaliacaoUncheckedUpdateWithoutAvaliacaoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoUncheckedUpdateManyWithoutAvaliacaoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduloCreateManyCursoInput = {
    id?: number
    titulo: string
    ordem: number
  }

  export type turmaCreateManyCursoInput = {
    id?: number
    nome: string
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type moduloUpdateWithoutCursoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUpdateManyWithoutModuloNestedInput
    video?: videoUpdateManyWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostila?: apostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutModuloNestedInput
    video?: videoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type moduloUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type turmaUpdateWithoutCursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUpdateManyWithoutTurmaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apostilaCreateManyModuloInput = {
    id?: number
    titulo: string
    arquivoUrl: string
  }

  export type avaliacaoCreateManyModuloInput = {
    id?: number
    titulo: string
    descricao?: string | null
  }

  export type videoCreateManyModuloInput = {
    id?: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type apostilaUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progressoapostila?: progressoapostilaUpdateManyWithoutApostilaNestedInput
  }

  export type apostilaUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type apostilaUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type avaliacaoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progressovideo?: progressovideoUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progressovideo?: progressovideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateManyPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuario_tipo
    dataCadastro?: Date | string
    cpf?: string | null
  }

  export type usuarioUpdateWithoutPlanoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutUsuarioNestedInput
    formapagamento?: formapagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    parceria?: parceriaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoapostila?: progressoapostilaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressoavaliacao?: progressoavaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    progressovideo?: progressovideoUncheckedUpdateManyWithoutUsuarioNestedInput
    turma?: turmaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuario_tipoFieldUpdateOperationsInput | $Enums.usuario_tipo
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alunoturmaCreateManyTurmaInput = {
    alunoId: number
  }

  export type alunoturmaUpdateWithoutTurmaInput = {
    usuario?: usuarioUpdateOneRequiredWithoutAlunoturmaNestedInput
  }

  export type alunoturmaUncheckedUpdateWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type alunoturmaUncheckedUpdateManyWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type alunoturmaCreateManyUsuarioInput = {
    turmaId: number
  }

  export type formapagamentoCreateManyUsuarioInput = {
    id?: number
    tipo: $Enums.formapagamento_tipo
    titular: string
    numero: string
    validade: string
    cvv?: string | null
    createdAt?: Date | string
    parcelas: number
  }

  export type parceriaCreateManyUsuarioInput = {
    id?: number
    descricaoProjeto?: string | null
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type progressoapostilaCreateManyUsuarioInput = {
    apostilaId: number
    baixouApostila: boolean
    dataUltimaInteracao: Date | string
  }

  export type progressoavaliacaoCreateManyUsuarioInput = {
    avaliacaoId: number
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type progressovideoCreateManyUsuarioInput = {
    videoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type turmaCreateManyUsuarioInput = {
    id?: number
    nome: string
    cursoId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type alunoturmaUpdateWithoutUsuarioInput = {
    turma?: turmaUpdateOneRequiredWithoutAlunoturmaNestedInput
  }

  export type alunoturmaUncheckedUpdateWithoutUsuarioInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type alunoturmaUncheckedUpdateManyWithoutUsuarioInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoUpdateWithoutUsuarioInput = {
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type formapagamentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumformapagamento_tipoFieldUpdateOperationsInput | $Enums.formapagamento_tipo
    titular?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    validade?: StringFieldUpdateOperationsInput | string
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: IntFieldUpdateOperationsInput | number
  }

  export type parceriaUpdateWithoutUsuarioInput = {
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type parceriaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type parceriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: NullableStringFieldUpdateOperationsInput | string | null
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type progressoapostilaUpdateWithoutUsuarioInput = {
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    apostila?: apostilaUpdateOneRequiredWithoutProgressoapostilaNestedInput
  }

  export type progressoapostilaUncheckedUpdateWithoutUsuarioInput = {
    apostilaId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoapostilaUncheckedUpdateManyWithoutUsuarioInput = {
    apostilaId?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoUpdateWithoutUsuarioInput = {
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: avaliacaoUpdateOneRequiredWithoutProgressoavaliacaoNestedInput
  }

  export type progressoavaliacaoUncheckedUpdateWithoutUsuarioInput = {
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressoavaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoUpdateWithoutUsuarioInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: videoUpdateOneRequiredWithoutProgressovideoNestedInput
  }

  export type progressovideoUncheckedUpdateWithoutUsuarioInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoUncheckedUpdateManyWithoutUsuarioInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type turmaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUpdateManyWithoutTurmaNestedInput
    curso?: cursoUpdateOneRequiredWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoturma?: alunoturmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type turmaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoCreateManyVideoInput = {
    alunoId: number
    progressoVideo: number
    dataUltimaInteracao: Date | string
  }

  export type progressovideoUpdateWithoutVideoInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutProgressovideoNestedInput
  }

  export type progressovideoUncheckedUpdateWithoutVideoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type progressovideoUncheckedUpdateManyWithoutVideoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
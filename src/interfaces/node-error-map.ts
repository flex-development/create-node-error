/**
 * @file Interfaces - NodeErrorMap
 * @module errnode/interfaces/NodeErrorMap
 */

/**
 * Registry of Node.js error codes.
 *
 * @see https://nodejs.org/api/errors.html#nodejs-error-codes
 */
interface NodeErrorMap {
  ABORT_ERR: true
  ERR_ACCESS_DENIED: true
  ERR_AMBIGUOUS_ARGUMENT: true
  ERR_ARG_NOT_ITERABLE: true
  ERR_ASSERTION: true
  ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED: true
  ERR_ASYNC_CALLBACK: true
  ERR_ASYNC_TYPE: true
  ERR_BROTLI_COMPRESSION_FAILED: true
  ERR_BROTLI_INVALID_PARAM: true
  ERR_BUFFER_CONTEXT_NOT_AVAILABLE: true
  ERR_BUFFER_OUT_OF_BOUNDS: true
  ERR_BUFFER_TOO_LARGE: true
  ERR_CANNOT_TRANSFER_OBJECT: true
  ERR_CANNOT_WATCH_SIGINT: true
  ERR_CHILD_CLOSED_BEFORE_REPLY: true
  ERR_CHILD_PROCESS_IPC_REQUIRED: true
  ERR_CHILD_PROCESS_STDIO_MAXBUFFER: true
  ERR_CLOSED_MESSAGE_PORT: true
  ERR_CONSOLE_WRITABLE_STREAM: true
  ERR_CONSTRUCT_CALL_INVALID: true
  ERR_CONSTRUCT_CALL_REQUIRED: true
  ERR_CONTEXT_NOT_INITIALIZED: true
  ERR_CPU_USAGE: true
  ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED: true
  ERR_CRYPTO_ECDH_INVALID_FORMAT: true
  ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY: true
  ERR_CRYPTO_ENGINE_UNKNOWN: true
  ERR_CRYPTO_FIPS_FORCED: true
  ERR_CRYPTO_FIPS_UNAVAILABLE: true
  ERR_CRYPTO_HASH_DIGEST_NO_UTF16: true
  ERR_CRYPTO_HASH_FINALIZED: true
  ERR_CRYPTO_HASH_UPDATE_FAILED: true
  ERR_CRYPTO_INCOMPATIBLE_KEY: true
  ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS: true
  ERR_CRYPTO_INITIALIZATION_FAILED: true
  ERR_CRYPTO_INVALID_AUTH_TAG: true
  ERR_CRYPTO_INVALID_COUNTER: true
  ERR_CRYPTO_INVALID_CURVE: true
  ERR_CRYPTO_INVALID_DIGEST: true
  ERR_CRYPTO_INVALID_IV: true
  ERR_CRYPTO_INVALID_JWK: true
  ERR_CRYPTO_INVALID_KEYLEN: true
  ERR_CRYPTO_INVALID_KEYPAIR: true
  ERR_CRYPTO_INVALID_KEYTYPE: true
  ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE: true
  ERR_CRYPTO_INVALID_MESSAGELEN: true
  ERR_CRYPTO_INVALID_SCRYPT_PARAMS: true
  ERR_CRYPTO_INVALID_STATE: true
  ERR_CRYPTO_INVALID_TAG_LENGTH: true
  ERR_CRYPTO_JOB_INIT_FAILED: true
  ERR_CRYPTO_JWK_UNSUPPORTED_CURVE: true
  ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE: true
  ERR_CRYPTO_OPERATION_FAILED: true
  ERR_CRYPTO_PBKDF2_ERROR: true
  ERR_CRYPTO_SCRYPT_INVALID_PARAMETER: true
  ERR_CRYPTO_SCRYPT_NOT_SUPPORTED: true
  ERR_CRYPTO_SIGN_KEY_REQUIRED: true
  ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH: true
  ERR_CRYPTO_UNKNOWN_CIPHER: true
  ERR_CRYPTO_UNKNOWN_DH_GROUP: true
  ERR_CRYPTO_UNSUPPORTED_OPERATION: true
  ERR_DEBUGGER_ERROR: true
  ERR_DEBUGGER_STARTUP_ERROR: true
  ERR_DIR_CLOSED: true
  ERR_DIR_CONCURRENT_OPERATION: true
  ERR_DLOPEN_DISABLED: true
  ERR_DLOPEN_FAILED: true
  ERR_DNS_SET_SERVERS_FAILED: true
  ERR_DOMAIN_CALLBACK_NOT_AVAILABLE: true
  ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE: true
  ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION: true
  ERR_ENCODING_INVALID_ENCODED_DATA: true
  ERR_ENCODING_NOT_SUPPORTED: true
  ERR_EVAL_ESM_CANNOT_PRINT: true
  ERR_EVENT_RECURSION: true
  ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE: true
  ERR_FALSY_VALUE_REJECTION: true
  ERR_FEATURE_UNAVAILABLE_ON_PLATFORM: true
  ERR_FS_CP_DIR_TO_NON_DIR: true
  ERR_FS_CP_EEXIST: true
  ERR_FS_CP_EINVAL: true
  ERR_FS_CP_FIFO_PIPE: true
  ERR_FS_CP_NON_DIR_TO_DIR: true
  ERR_FS_CP_SOCKET: true
  ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY: true
  ERR_FS_CP_UNKNOWN: true
  ERR_FS_EISDIR: true
  ERR_FS_FILE_TOO_LARGE: true
  ERR_FS_INVALID_SYMLINK_TYPE: true
  ERR_HTTP2_ALTSVC_INVALID_ORIGIN: true
  ERR_HTTP2_ALTSVC_LENGTH: true
  ERR_HTTP2_CONNECT_AUTHORITY: true
  ERR_HTTP2_CONNECT_PATH: true
  ERR_HTTP2_CONNECT_SCHEME: true
  ERR_HTTP2_ERROR: true
  ERR_HTTP2_FRAME_ERROR: true
  ERR_HTTP2_GOAWAY_SESSION: true
  ERR_HTTP2_HEADERS_AFTER_RESPOND: true
  ERR_HTTP2_HEADERS_OBJECT: true
  ERR_HTTP2_HEADERS_SENT: true
  ERR_HTTP2_HEADER_REQUIRED: true
  ERR_HTTP2_HEADER_SINGLE_VALUE: true
  ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND: true
  ERR_HTTP2_INFO_STATUS_NOT_ALLOWED: true
  ERR_HTTP2_INVALID_CONNECTION_HEADERS: true
  ERR_HTTP2_INVALID_HEADER_VALUE: true
  ERR_HTTP2_INVALID_INFO_STATUS: true
  ERR_HTTP2_INVALID_ORIGIN: true
  ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH: true
  ERR_HTTP2_INVALID_PSEUDOHEADER: true
  ERR_HTTP2_INVALID_SESSION: true
  ERR_HTTP2_INVALID_SETTING_VALUE: true
  ERR_HTTP2_INVALID_STREAM: true
  ERR_HTTP2_MAX_PENDING_SETTINGS_ACK: true
  ERR_HTTP2_NESTED_PUSH: true
  ERR_HTTP2_NO_MEM: true
  ERR_HTTP2_NO_SOCKET_MANIPULATION: true
  ERR_HTTP2_ORIGIN_LENGTH: true
  ERR_HTTP2_OUT_OF_STREAMS: true
  ERR_HTTP2_PAYLOAD_FORBIDDEN: true
  ERR_HTTP2_PING_CANCEL: true
  ERR_HTTP2_PING_LENGTH: true
  ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED: true
  ERR_HTTP2_PUSH_DISABLED: true
  ERR_HTTP2_SEND_FILE: true
  ERR_HTTP2_SEND_FILE_NOSEEK: true
  ERR_HTTP2_SESSION_ERROR: true
  ERR_HTTP2_SETTINGS_CANCEL: true
  ERR_HTTP2_SOCKET_BOUND: true
  ERR_HTTP2_SOCKET_UNBOUND: true
  ERR_HTTP2_STATUS_101: true
  ERR_HTTP2_STATUS_INVALID: true
  ERR_HTTP2_STREAM_CANCEL: true
  ERR_HTTP2_STREAM_CLOSED: true
  ERR_HTTP2_STREAM_ERROR: true
  ERR_HTTP2_STREAM_SELF_DEPENDENCY: true
  ERR_HTTP2_TOO_MANY_CUSTOM_SETTINGS: true
  ERR_HTTP2_TOO_MANY_INVALID_FRAMES: true
  ERR_HTTP2_TRAILERS_ALREADY_SENT: true
  ERR_HTTP2_TRAILERS_NOT_READY: true
  ERR_HTTP2_UNSUPPORTED_PROTOCOL: true
  ERR_HTTP_BODY_NOT_ALLOWED: true
  ERR_HTTP_CONTENT_LENGTH_MISMATCH: true
  ERR_HTTP_HEADERS_SENT: true
  ERR_HTTP_INVALID_CHAR: true
  ERR_HTTP_INVALID_HEADER_VALUE: true
  ERR_HTTP_INVALID_STATUS_CODE: true
  ERR_HTTP_REQUEST_TIMEOUT: true
  ERR_HTTP_SOCKET_ASSIGNED: true
  ERR_HTTP_SOCKET_ENCODING: true
  ERR_HTTP_TRAILER_INVALID: true
  ERR_ILLEGAL_CONSTRUCTOR: true
  ERR_IMPORT_ASSERTION_TYPE_FAILED: true
  ERR_IMPORT_ASSERTION_TYPE_MISSING: true
  ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED: true
  ERR_IMPORT_ATTRIBUTE_MISSING: true
  ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE: true
  ERR_IMPORT_ATTRIBUTE_UNSUPPORTED: true
  ERR_INCOMPATIBLE_OPTION_PAIR: true
  ERR_INDEX_OUT_OF_RANGE: true
  ERR_INPUT_TYPE_NOT_ALLOWED: true
  ERR_INSPECTOR_ALREADY_ACTIVATED: true
  ERR_INSPECTOR_ALREADY_CONNECTED: true
  ERR_INSPECTOR_CLOSED: true
  ERR_INSPECTOR_COMMAND: true
  ERR_INSPECTOR_NOT_ACTIVE: true
  ERR_INSPECTOR_NOT_AVAILABLE: true
  ERR_INSPECTOR_NOT_CONNECTED: true
  ERR_INSPECTOR_NOT_WORKER: true
  ERR_INTERNAL_ASSERTION: true
  ERR_INVALID_ADDRESS_FAMILY: true
  ERR_INVALID_ARG_TYPE: true
  ERR_INVALID_ARG_VALUE: true
  ERR_INVALID_ASYNC_ID: true
  ERR_INVALID_BUFFER_SIZE: true
  ERR_INVALID_CHAR: true
  ERR_INVALID_CURSOR_POS: true
  ERR_INVALID_FD: true
  ERR_INVALID_FD_TYPE: true
  ERR_INVALID_FILE_URL_HOST: true
  ERR_INVALID_FILE_URL_PATH: true
  ERR_INVALID_HANDLE_TYPE: true
  ERR_INVALID_HTTP_TOKEN: true
  ERR_INVALID_IP_ADDRESS: true
  ERR_INVALID_MIME_SYNTAX: true
  ERR_INVALID_MODULE: true
  ERR_INVALID_MODULE_SPECIFIER: true
  ERR_INVALID_OBJECT_DEFINE_PROPERTY: true
  ERR_INVALID_OPT_VALUE: true
  ERR_INVALID_OPT_VALUE_ENCODING: true
  ERR_INVALID_PACKAGE_CONFIG: true
  ERR_INVALID_PACKAGE_TARGET: true
  ERR_INVALID_PERFORMANCE_MARK: true
  ERR_INVALID_PROTOCOL: true
  ERR_INVALID_REPL_EVAL_CONFIG: true
  ERR_INVALID_REPL_INPUT: true
  ERR_INVALID_RETURN_PROPERTY: true
  ERR_INVALID_RETURN_PROPERTY_VALUE: true
  ERR_INVALID_RETURN_VALUE: true
  ERR_INVALID_STATE: true
  ERR_INVALID_SYNC_FORK_INPUT: true
  ERR_INVALID_THIS: true
  ERR_INVALID_TRANSFER_OBJECT: true
  ERR_INVALID_TUPLE: true
  ERR_INVALID_URI: true
  ERR_INVALID_URL: true
  ERR_INVALID_URL_SCHEME: true
  ERR_IPC_CHANNEL_CLOSED: true
  ERR_IPC_DISCONNECTED: true
  ERR_IPC_ONE_PIPE: true
  ERR_IPC_SYNC_FORK: true
  ERR_LOADER_CHAIN_INCOMPLETE: true
  ERR_MANIFEST_ASSERT_INTEGRITY: true
  ERR_MANIFEST_DEPENDENCY_MISSING: true
  ERR_MANIFEST_INTEGRITY_MISMATCH: true
  ERR_MANIFEST_INVALID_RESOURCE_FIELD: true
  ERR_MANIFEST_INVALID_SPECIFIER: true
  ERR_MANIFEST_PARSE_POLICY: true
  ERR_MANIFEST_TDZ: true
  ERR_MANIFEST_UNKNOWN_ONERROR: true
  ERR_MEMORY_ALLOCATION_FAILED: true
  ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE: true
  ERR_METHOD_NOT_IMPLEMENTED: true
  ERR_MISSING_ARGS: true
  ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST: true
  ERR_MISSING_OPTION: true
  ERR_MISSING_PASSPHRASE: true
  ERR_MISSING_PLATFORM_FOR_WORKER: true
  ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST: true
  ERR_MODULE_NOT_FOUND: true
  ERR_MULTIPLE_CALLBACK: true
  ERR_NAPI_CONS_FUNCTION: true
  ERR_NAPI_CONS_PROTOTYPE_OBJECT: true
  ERR_NAPI_INVALID_DATAVIEW_ARGS: true
  ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT: true
  ERR_NAPI_INVALID_TYPEDARRAY_LENGTH: true
  ERR_NAPI_TSFN_CALL_JS: true
  ERR_NAPI_TSFN_GET_UNDEFINED: true
  ERR_NAPI_TSFN_START_IDLE_LOOP: true
  ERR_NAPI_TSFN_STOP_IDLE_LOOP: true
  ERR_NETWORK_IMPORT_BAD_RESPONSE: true
  ERR_NETWORK_IMPORT_DISALLOWED: true
  ERR_NON_CONTEXT_AWARE_DISABLED: true
  ERR_NOT_BUILDING_SNAPSHOT: true
  ERR_NOT_IN_SINGLE_EXECUTABLE_APPLICATION: true
  ERR_NOT_SUPPORTED_IN_SNAPSHOT: true
  ERR_NO_CRYPTO: true
  ERR_NO_ICU: true
  ERR_NO_LONGER_SUPPORTED: true
  ERR_OPERATION_FAILED: true
  ERR_OUTOFMEMORY: true
  ERR_OUT_OF_RANGE: true
  ERR_PACKAGE_IMPORT_NOT_DEFINED: true
  ERR_PACKAGE_PATH_NOT_EXPORTED: true
  ERR_PARSE_ARGS_INVALID_OPTION_VALUE: true
  ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL: true
  ERR_PARSE_ARGS_UNKNOWN_OPTION: true
  ERR_PARSE_HISTORY_DATA: true
  ERR_PERFORMANCE_INVALID_TIMESTAMP: true
  ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS: true
  ERR_PROTO_ACCESS: true
  ERR_REQUIRE_ASYNC_MODULE: true
  ERR_REQUIRE_CYCLE_MODULE: true
  ERR_REQUIRE_ESM: true
  ERR_SCRIPT_EXECUTION_INTERRUPTED: true
  ERR_SCRIPT_EXECUTION_TIMEOUT: true
  ERR_SERVER_ALREADY_LISTEN: true
  ERR_SERVER_NOT_RUNNING: true
  ERR_SINGLE_EXECUTABLE_APPLICATION_ASSET_NOT_FOUND: true
  ERR_SOCKET_ALREADY_BOUND: true
  ERR_SOCKET_BAD_BUFFER_SIZE: true
  ERR_SOCKET_BAD_PORT: true
  ERR_SOCKET_BAD_TYPE: true
  ERR_SOCKET_BUFFER_SIZE: true
  ERR_SOCKET_CANNOT_SEND: true
  ERR_SOCKET_CONNECTION_TIMEOUT: true
  ERR_SOCKET_CLOSED: true
  ERR_SOCKET_CLOSED_BEFORE_CONNECTION: true
  ERR_SOCKET_DGRAM_IS_CONNECTED: true
  ERR_SOCKET_DGRAM_NOT_CONNECTED: true
  ERR_SOCKET_DGRAM_NOT_RUNNING: true
  ERR_SQLITE_ERROR: true
  ERR_SRI_PARSE: true
  ERR_STDERR_CLOSE: true
  ERR_STDOUT_CLOSE: true
  ERR_STREAM_ALREADY_FINISHED: true
  ERR_STREAM_CANNOT_PIPE: true
  ERR_STREAM_DESTROYED: true
  ERR_STREAM_NULL_VALUES: true
  ERR_STREAM_PREMATURE_CLOSE: true
  ERR_STREAM_PUSH_AFTER_EOF: true
  ERR_STREAM_READ_NOT_IMPLEMENTED: true
  ERR_STREAM_UNSHIFT_AFTER_END_EVENT: true
  ERR_STREAM_WRAP: true
  ERR_STREAM_WRITE_AFTER_END: true
  ERR_STRING_TOO_LONG: true
  ERR_SYNTHETIC: true
  ERR_SYSTEM_ERROR: true
  ERR_TAP_LEXER_ERROR: true
  ERR_TAP_PARSER_ERROR: true
  ERR_TAP_VALIDATION_ERROR: true
  ERR_TEST_FAILURE: true
  ERR_TLS_ALPN_CALLBACK_INVALID_RESULT: true
  ERR_TLS_ALPN_CALLBACK_WITH_PROTOCOLS: true
  ERR_TLS_CERT_ALTNAME_FORMAT: true
  ERR_TLS_CERT_ALTNAME_INVALID: true
  ERR_TLS_DH_PARAM_SIZE: true
  ERR_TLS_HANDSHAKE_TIMEOUT: true
  ERR_TLS_INVALID_CONTEXT: true
  ERR_TLS_INVALID_PROTOCOL_METHOD: true
  ERR_TLS_INVALID_PROTOCOL_VERSION: true
  ERR_TLS_INVALID_STATE: true
  ERR_TLS_PROTOCOL_VERSION_CONFLICT: true
  ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED: true
  ERR_TLS_RENEGOTIATION_DISABLED: true
  ERR_TLS_RENEGOTIATION_FAILED: true
  ERR_TLS_REQUIRED_SERVER_NAME: true
  ERR_TLS_SESSION_ATTACK: true
  ERR_TLS_SNI_FROM_SERVER: true
  ERR_TRACE_EVENTS_CATEGORY_REQUIRED: true
  ERR_TRACE_EVENTS_UNAVAILABLE: true
  ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER: true
  ERR_TRANSFORM_ALREADY_TRANSFORMING: true
  ERR_TRANSFORM_WITH_LENGTH_0: true
  ERR_TTY_INIT_FAILED: true
  ERR_UNAVAILABLE_DURING_EXIT: true
  ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET: true
  ERR_UNESCAPED_CHARACTERS: true
  ERR_UNHANDLED_ERROR: true
  ERR_UNKNOWN_BUILTIN_MODULE: true
  ERR_UNKNOWN_CREDENTIAL: true
  ERR_UNKNOWN_ENCODING: true
  ERR_UNKNOWN_FILE_EXTENSION: true
  ERR_UNKNOWN_MODULE_FORMAT: true
  ERR_UNKNOWN_SIGNAL: true
  ERR_UNKNOWN_STDIN_TYPE: true
  ERR_UNKNOWN_STREAM_TYPE: true
  ERR_UNSUPPORTED_DIR_IMPORT: true
  ERR_UNSUPPORTED_ESM_URL_SCHEME: true
  ERR_UNSUPPORTED_RESOLVE_REQUEST: true
  ERR_USE_AFTER_CLOSE: true
  ERR_V8BREAKITERATOR: true
  ERR_VALID_PERFORMANCE_ENTRY_TYPE: true
  ERR_VALUE_OUT_OF_RANGE: true
  ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING: true
  ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING_FLAG: true
  ERR_VM_MODULE_ALREADY_LINKED: true
  ERR_VM_MODULE_CACHED_DATA_REJECTED: true
  ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA: true
  ERR_VM_MODULE_DIFFERENT_CONTEXT: true
  ERR_VM_MODULE_LINKING_ERRORED: true
  ERR_VM_MODULE_LINK_FAILURE: true
  ERR_VM_MODULE_NOT_LINKED: true
  ERR_VM_MODULE_NOT_MODULE: true
  ERR_VM_MODULE_STATUS: true
  ERR_WASI_ALREADY_STARTED: true
  ERR_WASI_NOT_STARTED: true
  ERR_WEBASSEMBLY_RESPONSE: true
  ERR_WORKER_INIT_FAILED: true
  ERR_WORKER_INVALID_EXEC_ARGV: true
  ERR_WORKER_MESSAGING_ERRORED: true
  ERR_WORKER_MESSAGING_FAILED: true
  ERR_WORKER_MESSAGING_SAME_THREAD: true
  ERR_WORKER_MESSAGING_TIMEOUT: true
  ERR_WORKER_NOT_RUNNING: true
  ERR_WORKER_OUT_OF_MEMORY: true
  ERR_WORKER_PATH: true
  ERR_WORKER_UNSERIALIZABLE_ERROR: true
  ERR_WORKER_UNSUPPORTED_EXTENSION: true
  ERR_WORKER_UNSUPPORTED_OPERATION: true
  ERR_ZLIB_BINDING_CLOSED: true
  ERR_ZLIB_INITIALIZATION_FAILED: true
  HPE_CHUNK_EXTENSIONS_OVERFLOW: true
  HPE_HEADER_OVERFLOW: true
  HPE_UNEXPECTED_CONTENT_LENGTH: true
  MODULE_NOT_FOUND: true
}

export type { NodeErrorMap as default }
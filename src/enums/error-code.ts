/**
 * @file Enums - ErrorCode
 * @module create-node-error/enums/ErrorCode
 */

/**
 * Node.js error codes.
 *
 * @see https://nodejs.org/api/errors.html#nodejs-error-codes
 *
 * @enum {Uppercase<string>}
 */
enum ErrorCode {
  ABORT_ERR = 'ABORT_ERR',
  ERR_AMBIGUOUS_ARGUMENT = 'ERR_AMBIGUOUS_ARGUMENT',
  ERR_ARG_NOT_ITERABLE = 'ERR_ARG_NOT_ITERABLE',
  ERR_ASSERTION = 'ERR_ASSERTION',
  ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED = 'ERR_ASSERT_SNAPSHOT_NOT_SUPPORTED',
  ERR_ASYNC_CALLBACK = 'ERR_ASYNC_CALLBACK',
  ERR_ASYNC_TYPE = 'ERR_ASYNC_TYPE',
  ERR_BROTLI_COMPRESSION_FAILED = 'ERR_BROTLI_COMPRESSION_FAILED',
  ERR_BROTLI_INVALID_PARAM = 'ERR_BROTLI_INVALID_PARAM',
  ERR_BUFFER_CONTEXT_NOT_AVAILABLE = 'ERR_BUFFER_CONTEXT_NOT_AVAILABLE',
  ERR_BUFFER_OUT_OF_BOUNDS = 'ERR_BUFFER_OUT_OF_BOUNDS',
  ERR_BUFFER_TOO_LARGE = 'ERR_BUFFER_TOO_LARGE',
  ERR_CANNOT_TRANSFER_OBJECT = 'ERR_CANNOT_TRANSFER_OBJECT',
  ERR_CANNOT_WATCH_SIGINT = 'ERR_CANNOT_WATCH_SIGINT',
  ERR_CHILD_CLOSED_BEFORE_REPLY = 'ERR_CHILD_CLOSED_BEFORE_REPLY',
  ERR_CHILD_PROCESS_IPC_REQUIRED = 'ERR_CHILD_PROCESS_IPC_REQUIRED',
  ERR_CHILD_PROCESS_STDIO_MAXBUFFER = 'ERR_CHILD_PROCESS_STDIO_MAXBUFFER',
  ERR_CLOSED_MESSAGE_PORT = 'ERR_CLOSED_MESSAGE_PORT',
  ERR_CONSOLE_WRITABLE_STREAM = 'ERR_CONSOLE_WRITABLE_STREAM',
  ERR_CONSTRUCT_CALL_INVALID = 'ERR_CONSTRUCT_CALL_INVALID',
  ERR_CONSTRUCT_CALL_REQUIRED = 'ERR_CONSTRUCT_CALL_REQUIRED',
  ERR_CONTEXT_NOT_INITIALIZED = 'ERR_CONTEXT_NOT_INITIALIZED',
  ERR_CPU_USAGE = 'ERR_CPU_USAGE',
  ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED = 'ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED',
  ERR_CRYPTO_ECDH_INVALID_FORMAT = 'ERR_CRYPTO_ECDH_INVALID_FORMAT',
  ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY = 'ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY',
  ERR_CRYPTO_ENGINE_UNKNOWN = 'ERR_CRYPTO_ENGINE_UNKNOWN',
  ERR_CRYPTO_FIPS_FORCED = 'ERR_CRYPTO_FIPS_FORCED',
  ERR_CRYPTO_FIPS_UNAVAILABLE = 'ERR_CRYPTO_FIPS_UNAVAILABLE',
  ERR_CRYPTO_HASH_DIGEST_NO_UTF16 = 'ERR_CRYPTO_HASH_DIGEST_NO_UTF16',
  ERR_CRYPTO_HASH_FINALIZED = 'ERR_CRYPTO_HASH_FINALIZED',
  ERR_CRYPTO_HASH_UPDATE_FAILED = 'ERR_CRYPTO_HASH_UPDATE_FAILED',
  ERR_CRYPTO_INCOMPATIBLE_KEY = 'ERR_CRYPTO_INCOMPATIBLE_KEY',
  ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS = 'ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS',
  ERR_CRYPTO_INITIALIZATION_FAILED = 'ERR_CRYPTO_INITIALIZATION_FAILED',
  ERR_CRYPTO_INVALID_AUTH_TAG = 'ERR_CRYPTO_INVALID_AUTH_TAG',
  ERR_CRYPTO_INVALID_COUNTER = 'ERR_CRYPTO_INVALID_COUNTER',
  ERR_CRYPTO_INVALID_CURVE = 'ERR_CRYPTO_INVALID_CURVE',
  ERR_CRYPTO_INVALID_DIGEST = 'ERR_CRYPTO_INVALID_DIGEST',
  ERR_CRYPTO_INVALID_IV = 'ERR_CRYPTO_INVALID_IV',
  ERR_CRYPTO_INVALID_JWK = 'ERR_CRYPTO_INVALID_JWK',
  ERR_CRYPTO_INVALID_KEYLEN = 'ERR_CRYPTO_INVALID_KEYLEN',
  ERR_CRYPTO_INVALID_KEYPAIR = 'ERR_CRYPTO_INVALID_KEYPAIR',
  ERR_CRYPTO_INVALID_KEYTYPE = 'ERR_CRYPTO_INVALID_KEYTYPE',
  ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE = 'ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE',
  ERR_CRYPTO_INVALID_MESSAGELEN = 'ERR_CRYPTO_INVALID_MESSAGELEN',
  ERR_CRYPTO_INVALID_SCRYPT_PARAMS = 'ERR_CRYPTO_INVALID_SCRYPT_PARAMS',
  ERR_CRYPTO_INVALID_STATE = 'ERR_CRYPTO_INVALID_STATE',
  ERR_CRYPTO_INVALID_TAG_LENGTH = 'ERR_CRYPTO_INVALID_TAG_LENGTH',
  ERR_CRYPTO_JOB_INIT_FAILED = 'ERR_CRYPTO_JOB_INIT_FAILED',
  ERR_CRYPTO_JWK_UNSUPPORTED_CURVE = 'ERR_CRYPTO_JWK_UNSUPPORTED_CURVE',
  ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE = 'ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE',
  ERR_CRYPTO_OPERATION_FAILED = 'ERR_CRYPTO_OPERATION_FAILED',
  ERR_CRYPTO_PBKDF2_ERROR = 'ERR_CRYPTO_PBKDF2_ERROR',
  ERR_CRYPTO_SCRYPT_INVALID_PARAMETER = 'ERR_CRYPTO_SCRYPT_INVALID_PARAMETER',
  ERR_CRYPTO_SCRYPT_NOT_SUPPORTED = 'ERR_CRYPTO_SCRYPT_NOT_SUPPORTED',
  ERR_CRYPTO_SIGN_KEY_REQUIRED = 'ERR_CRYPTO_SIGN_KEY_REQUIRED',
  ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH = 'ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH',
  ERR_CRYPTO_UNKNOWN_CIPHER = 'ERR_CRYPTO_UNKNOWN_CIPHER',
  ERR_CRYPTO_UNKNOWN_DH_GROUP = 'ERR_CRYPTO_UNKNOWN_DH_GROUP',
  ERR_CRYPTO_UNSUPPORTED_OPERATION = 'ERR_CRYPTO_UNSUPPORTED_OPERATION',
  ERR_DEBUGGER_ERROR = 'ERR_DEBUGGER_ERROR',
  ERR_DEBUGGER_STARTUP_ERROR = 'ERR_DEBUGGER_STARTUP_ERROR',
  ERR_DIR_CLOSED = 'ERR_DIR_CLOSED',
  ERR_DIR_CONCURRENT_OPERATION = 'ERR_DIR_CONCURRENT_OPERATION',
  ERR_DLOPEN_DISABLED = 'ERR_DLOPEN_DISABLED',
  ERR_DLOPEN_FAILED = 'ERR_DLOPEN_FAILED',
  ERR_DNS_SET_SERVERS_FAILED = 'ERR_DNS_SET_SERVERS_FAILED',
  ERR_DOMAIN_CALLBACK_NOT_AVAILABLE = 'ERR_DOMAIN_CALLBACK_NOT_AVAILABLE',
  ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE = 'ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE',
  ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION = 'ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION',
  ERR_ENCODING_INVALID_ENCODED_DATA = 'ERR_ENCODING_INVALID_ENCODED_DATA',
  ERR_ENCODING_NOT_SUPPORTED = 'ERR_ENCODING_NOT_SUPPORTED',
  ERR_EVAL_ESM_CANNOT_PRINT = 'ERR_EVAL_ESM_CANNOT_PRINT',
  ERR_EVENT_RECURSION = 'ERR_EVENT_RECURSION',
  ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE = 'ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE',
  ERR_FALSY_VALUE_REJECTION = 'ERR_FALSY_VALUE_REJECTION',
  ERR_FEATURE_UNAVAILABLE_ON_PLATFORM = 'ERR_FEATURE_UNAVAILABLE_ON_PLATFORM',
  ERR_FS_CP_DIR_TO_NON_DIR = 'ERR_FS_CP_DIR_TO_NON_DIR',
  ERR_FS_CP_EEXIST = 'ERR_FS_CP_EEXIST',
  ERR_FS_CP_EINVAL = 'ERR_FS_CP_EINVAL',
  ERR_FS_CP_FIFO_PIPE = 'ERR_FS_CP_FIFO_PIPE',
  ERR_FS_CP_NON_DIR_TO_DIR = 'ERR_FS_CP_NON_DIR_TO_DIR',
  ERR_FS_CP_SOCKET = 'ERR_FS_CP_SOCKET',
  ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY = 'ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY',
  ERR_FS_CP_UNKNOWN = 'ERR_FS_CP_UNKNOWN',
  ERR_FS_EISDIR = 'ERR_FS_EISDIR',
  ERR_FS_FILE_TOO_LARGE = 'ERR_FS_FILE_TOO_LARGE',
  ERR_FS_INVALID_SYMLINK_TYPE = 'ERR_FS_INVALID_SYMLINK_TYPE',
  ERR_HTTP2_ALTSVC_INVALID_ORIGIN = 'ERR_HTTP2_ALTSVC_INVALID_ORIGIN',
  ERR_HTTP2_ALTSVC_LENGTH = 'ERR_HTTP2_ALTSVC_LENGTH',
  ERR_HTTP2_CONNECT_AUTHORITY = 'ERR_HTTP2_CONNECT_AUTHORITY',
  ERR_HTTP2_CONNECT_PATH = 'ERR_HTTP2_CONNECT_PATH',
  ERR_HTTP2_CONNECT_SCHEME = 'ERR_HTTP2_CONNECT_SCHEME',
  ERR_HTTP2_ERROR = 'ERR_HTTP2_ERROR',
  ERR_HTTP2_FRAME_ERROR = 'ERR_HTTP2_FRAME_ERROR',
  ERR_HTTP2_GOAWAY_SESSION = 'ERR_HTTP2_GOAWAY_SESSION',
  ERR_HTTP2_HEADERS_AFTER_RESPOND = 'ERR_HTTP2_HEADERS_AFTER_RESPOND',
  ERR_HTTP2_HEADERS_OBJECT = 'ERR_HTTP2_HEADERS_OBJECT',
  ERR_HTTP2_HEADERS_SENT = 'ERR_HTTP2_HEADERS_SENT',
  ERR_HTTP2_HEADER_REQUIRED = 'ERR_HTTP2_HEADER_REQUIRED',
  ERR_HTTP2_HEADER_SINGLE_VALUE = 'ERR_HTTP2_HEADER_SINGLE_VALUE',
  ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND = 'ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND',
  ERR_HTTP2_INFO_STATUS_NOT_ALLOWED = 'ERR_HTTP2_INFO_STATUS_NOT_ALLOWED',
  ERR_HTTP2_INVALID_CONNECTION_HEADERS = 'ERR_HTTP2_INVALID_CONNECTION_HEADERS',
  ERR_HTTP2_INVALID_HEADER_VALUE = 'ERR_HTTP2_INVALID_HEADER_VALUE',
  ERR_HTTP2_INVALID_INFO_STATUS = 'ERR_HTTP2_INVALID_INFO_STATUS',
  ERR_HTTP2_INVALID_ORIGIN = 'ERR_HTTP2_INVALID_ORIGIN',
  ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH = 'ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH',
  ERR_HTTP2_INVALID_PSEUDOHEADER = 'ERR_HTTP2_INVALID_PSEUDOHEADER',
  ERR_HTTP2_INVALID_SESSION = 'ERR_HTTP2_INVALID_SESSION',
  ERR_HTTP2_INVALID_SETTING_VALUE = 'ERR_HTTP2_INVALID_SETTING_VALUE',
  ERR_HTTP2_INVALID_STREAM = 'ERR_HTTP2_INVALID_STREAM',
  ERR_HTTP2_MAX_PENDING_SETTINGS_ACK = 'ERR_HTTP2_MAX_PENDING_SETTINGS_ACK',
  ERR_HTTP2_NESTED_PUSH = 'ERR_HTTP2_NESTED_PUSH',
  ERR_HTTP2_NO_MEM = 'ERR_HTTP2_NO_MEM',
  ERR_HTTP2_NO_SOCKET_MANIPULATION = 'ERR_HTTP2_NO_SOCKET_MANIPULATION',
  ERR_HTTP2_ORIGIN_LENGTH = 'ERR_HTTP2_ORIGIN_LENGTH',
  ERR_HTTP2_OUT_OF_STREAMS = 'ERR_HTTP2_OUT_OF_STREAMS',
  ERR_HTTP2_PAYLOAD_FORBIDDEN = 'ERR_HTTP2_PAYLOAD_FORBIDDEN',
  ERR_HTTP2_PING_CANCEL = 'ERR_HTTP2_PING_CANCEL',
  ERR_HTTP2_PING_LENGTH = 'ERR_HTTP2_PING_LENGTH',
  ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED = 'ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED',
  ERR_HTTP2_PUSH_DISABLED = 'ERR_HTTP2_PUSH_DISABLED',
  ERR_HTTP2_SEND_FILE = 'ERR_HTTP2_SEND_FILE',
  ERR_HTTP2_SEND_FILE_NOSEEK = 'ERR_HTTP2_SEND_FILE_NOSEEK',
  ERR_HTTP2_SESSION_ERROR = 'ERR_HTTP2_SESSION_ERROR',
  ERR_HTTP2_SETTINGS_CANCEL = 'ERR_HTTP2_SETTINGS_CANCEL',
  ERR_HTTP2_SOCKET_BOUND = 'ERR_HTTP2_SOCKET_BOUND',
  ERR_HTTP2_SOCKET_UNBOUND = 'ERR_HTTP2_SOCKET_UNBOUND',
  ERR_HTTP2_STATUS_101 = 'ERR_HTTP2_STATUS_101',
  ERR_HTTP2_STATUS_INVALID = 'ERR_HTTP2_STATUS_INVALID',
  ERR_HTTP2_STREAM_CANCEL = 'ERR_HTTP2_STREAM_CANCEL',
  ERR_HTTP2_STREAM_CLOSED = 'ERR_HTTP2_STREAM_CLOSED',
  ERR_HTTP2_STREAM_ERROR = 'ERR_HTTP2_STREAM_ERROR',
  ERR_HTTP2_STREAM_SELF_DEPENDENCY = 'ERR_HTTP2_STREAM_SELF_DEPENDENCY',
  ERR_HTTP2_TOO_MANY_INVALID_FRAMES = 'ERR_HTTP2_TOO_MANY_INVALID_FRAMES',
  ERR_HTTP2_TRAILERS_ALREADY_SENT = 'ERR_HTTP2_TRAILERS_ALREADY_SENT',
  ERR_HTTP2_TRAILERS_NOT_READY = 'ERR_HTTP2_TRAILERS_NOT_READY',
  ERR_HTTP2_UNSUPPORTED_PROTOCOL = 'ERR_HTTP2_UNSUPPORTED_PROTOCOL',
  ERR_HTTP_CONTENT_LENGTH_MISMATCH = 'ERR_HTTP_CONTENT_LENGTH_MISMATCH',
  ERR_HTTP_HEADERS_SENT = 'ERR_HTTP_HEADERS_SENT',
  ERR_HTTP_INVALID_CHAR = 'ERR_HTTP_INVALID_CHAR',
  ERR_HTTP_INVALID_HEADER_VALUE = 'ERR_HTTP_INVALID_HEADER_VALUE',
  ERR_HTTP_INVALID_STATUS_CODE = 'ERR_HTTP_INVALID_STATUS_CODE',
  ERR_HTTP_REQUEST_TIMEOUT = 'ERR_HTTP_REQUEST_TIMEOUT',
  ERR_HTTP_SOCKET_ENCODING = 'ERR_HTTP_SOCKET_ENCODING',
  ERR_HTTP_TRAILER_INVALID = 'ERR_HTTP_TRAILER_INVALID',
  ERR_ILLEGAL_CONSTRUCTOR = 'ERR_ILLEGAL_CONSTRUCTOR',
  ERR_IMPORT_ASSERTION_TYPE_FAILED = 'ERR_IMPORT_ASSERTION_TYPE_FAILED',
  ERR_IMPORT_ASSERTION_TYPE_MISSING = 'ERR_IMPORT_ASSERTION_TYPE_MISSING',
  ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED = 'ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED',
  ERR_INCOMPATIBLE_OPTION_PAIR = 'ERR_INCOMPATIBLE_OPTION_PAIR',
  ERR_INDEX_OUT_OF_RANGE = 'ERR_INDEX_OUT_OF_RANGE',
  ERR_INPUT_TYPE_NOT_ALLOWED = 'ERR_INPUT_TYPE_NOT_ALLOWED',
  ERR_INSPECTOR_ALREADY_ACTIVATED = 'ERR_INSPECTOR_ALREADY_ACTIVATED',
  ERR_INSPECTOR_ALREADY_CONNECTED = 'ERR_INSPECTOR_ALREADY_CONNECTED',
  ERR_INSPECTOR_CLOSED = 'ERR_INSPECTOR_CLOSED',
  ERR_INSPECTOR_COMMAND = 'ERR_INSPECTOR_COMMAND',
  ERR_INSPECTOR_NOT_ACTIVE = 'ERR_INSPECTOR_NOT_ACTIVE',
  ERR_INSPECTOR_NOT_AVAILABLE = 'ERR_INSPECTOR_NOT_AVAILABLE',
  ERR_INSPECTOR_NOT_CONNECTED = 'ERR_INSPECTOR_NOT_CONNECTED',
  ERR_INSPECTOR_NOT_WORKER = 'ERR_INSPECTOR_NOT_WORKER',
  ERR_INTERNAL_ASSERTION = 'ERR_INTERNAL_ASSERTION',
  ERR_INVALID_ADDRESS_FAMILY = 'ERR_INVALID_ADDRESS_FAMILY',
  ERR_INVALID_ARG_TYPE = 'ERR_INVALID_ARG_TYPE',
  ERR_INVALID_ARG_VALUE = 'ERR_INVALID_ARG_VALUE',
  ERR_INVALID_ASYNC_ID = 'ERR_INVALID_ASYNC_ID',
  ERR_INVALID_BUFFER_SIZE = 'ERR_INVALID_BUFFER_SIZE',
  ERR_INVALID_CHAR = 'ERR_INVALID_CHAR',
  ERR_INVALID_CURSOR_POS = 'ERR_INVALID_CURSOR_POS',
  ERR_INVALID_FD = 'ERR_INVALID_FD',
  ERR_INVALID_FD_TYPE = 'ERR_INVALID_FD_TYPE',
  ERR_INVALID_FILE_URL_HOST = 'ERR_INVALID_FILE_URL_HOST',
  ERR_INVALID_FILE_URL_PATH = 'ERR_INVALID_FILE_URL_PATH',
  ERR_INVALID_HANDLE_TYPE = 'ERR_INVALID_HANDLE_TYPE',
  ERR_INVALID_HTTP_TOKEN = 'ERR_INVALID_HTTP_TOKEN',
  ERR_INVALID_IP_ADDRESS = 'ERR_INVALID_IP_ADDRESS',
  ERR_INVALID_MIME_SYNTAX = 'ERR_INVALID_MIME_SYNTAX',
  ERR_INVALID_MODULE = 'ERR_INVALID_MODULE',
  ERR_INVALID_MODULE_SPECIFIER = 'ERR_INVALID_MODULE_SPECIFIER',
  ERR_INVALID_OBJECT_DEFINE_PROPERTY = 'ERR_INVALID_OBJECT_DEFINE_PROPERTY',
  ERR_INVALID_OPT_VALUE = 'ERR_INVALID_OPT_VALUE',
  ERR_INVALID_OPT_VALUE_ENCODING = 'ERR_INVALID_OPT_VALUE_ENCODING',
  ERR_INVALID_PACKAGE_CONFIG = 'ERR_INVALID_PACKAGE_CONFIG',
  ERR_INVALID_PACKAGE_TARGET = 'ERR_INVALID_PACKAGE_TARGET',
  ERR_INVALID_PERFORMANCE_MARK = 'ERR_INVALID_PERFORMANCE_MARK',
  ERR_INVALID_PROTOCOL = 'ERR_INVALID_PROTOCOL',
  ERR_INVALID_REPL_EVAL_CONFIG = 'ERR_INVALID_REPL_EVAL_CONFIG',
  ERR_INVALID_REPL_INPUT = 'ERR_INVALID_REPL_INPUT',
  ERR_INVALID_RETURN_PROPERTY = 'ERR_INVALID_RETURN_PROPERTY',
  ERR_INVALID_RETURN_PROPERTY_VALUE = 'ERR_INVALID_RETURN_PROPERTY_VALUE',
  ERR_INVALID_RETURN_VALUE = 'ERR_INVALID_RETURN_VALUE',
  ERR_INVALID_STATE = 'ERR_INVALID_STATE',
  ERR_INVALID_SYNC_FORK_INPUT = 'ERR_INVALID_SYNC_FORK_INPUT',
  ERR_INVALID_THIS = 'ERR_INVALID_THIS',
  ERR_INVALID_TRANSFER_OBJECT = 'ERR_INVALID_TRANSFER_OBJECT',
  ERR_INVALID_TUPLE = 'ERR_INVALID_TUPLE',
  ERR_INVALID_URI = 'ERR_INVALID_URI',
  ERR_INVALID_URL = 'ERR_INVALID_URL',
  ERR_INVALID_URL_SCHEME = 'ERR_INVALID_URL_SCHEME',
  ERR_IPC_CHANNEL_CLOSED = 'ERR_IPC_CHANNEL_CLOSED',
  ERR_IPC_DISCONNECTED = 'ERR_IPC_DISCONNECTED',
  ERR_IPC_ONE_PIPE = 'ERR_IPC_ONE_PIPE',
  ERR_IPC_SYNC_FORK = 'ERR_IPC_SYNC_FORK',
  ERR_LOADER_CHAIN_INCOMPLETE = 'ERR_LOADER_CHAIN_INCOMPLETE',
  ERR_MANIFEST_ASSERT_INTEGRITY = 'ERR_MANIFEST_ASSERT_INTEGRITY',
  ERR_MANIFEST_DEPENDENCY_MISSING = 'ERR_MANIFEST_DEPENDENCY_MISSING',
  ERR_MANIFEST_INTEGRITY_MISMATCH = 'ERR_MANIFEST_INTEGRITY_MISMATCH',
  ERR_MANIFEST_INVALID_RESOURCE_FIELD = 'ERR_MANIFEST_INVALID_RESOURCE_FIELD',
  ERR_MANIFEST_INVALID_SPECIFIER = 'ERR_MANIFEST_INVALID_SPECIFIER',
  ERR_MANIFEST_PARSE_POLICY = 'ERR_MANIFEST_PARSE_POLICY',
  ERR_MANIFEST_TDZ = 'ERR_MANIFEST_TDZ',
  ERR_MANIFEST_UNKNOWN_ONERROR = 'ERR_MANIFEST_UNKNOWN_ONERROR',
  ERR_MEMORY_ALLOCATION_FAILED = 'ERR_MEMORY_ALLOCATION_FAILED',
  ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE = 'ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE',
  ERR_METHOD_NOT_IMPLEMENTED = 'ERR_METHOD_NOT_IMPLEMENTED',
  ERR_MISSING_ARGS = 'ERR_MISSING_ARGS',
  ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST = 'ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST',
  ERR_MISSING_OPTION = 'ERR_MISSING_OPTION',
  ERR_MISSING_PASSPHRASE = 'ERR_MISSING_PASSPHRASE',
  ERR_MISSING_PLATFORM_FOR_WORKER = 'ERR_MISSING_PLATFORM_FOR_WORKER',
  ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST = 'ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST',
  ERR_MODULE_NOT_FOUND = 'ERR_MODULE_NOT_FOUND',
  ERR_MULTIPLE_CALLBACK = 'ERR_MULTIPLE_CALLBACK',
  ERR_NAPI_CONS_FUNCTION = 'ERR_NAPI_CONS_FUNCTION',
  ERR_NAPI_CONS_PROTOTYPE_OBJECT = 'ERR_NAPI_CONS_PROTOTYPE_OBJECT',
  ERR_NAPI_INVALID_DATAVIEW_ARGS = 'ERR_NAPI_INVALID_DATAVIEW_ARGS',
  ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT = 'ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT',
  ERR_NAPI_INVALID_TYPEDARRAY_LENGTH = 'ERR_NAPI_INVALID_TYPEDARRAY_LENGTH',
  ERR_NAPI_TSFN_CALL_JS = 'ERR_NAPI_TSFN_CALL_JS',
  ERR_NAPI_TSFN_GET_UNDEFINED = 'ERR_NAPI_TSFN_GET_UNDEFINED',
  ERR_NAPI_TSFN_START_IDLE_LOOP = 'ERR_NAPI_TSFN_START_IDLE_LOOP',
  ERR_NAPI_TSFN_STOP_IDLE_LOOP = 'ERR_NAPI_TSFN_STOP_IDLE_LOOP',
  ERR_NETWORK_IMPORT_BAD_RESPONSE = 'ERR_NETWORK_IMPORT_BAD_RESPONSE',
  ERR_NETWORK_IMPORT_DISALLOWED = 'ERR_NETWORK_IMPORT_DISALLOWED',
  ERR_NON_CONTEXT_AWARE_DISABLED = 'ERR_NON_CONTEXT_AWARE_DISABLED',
  ERR_NOT_BUILDING_SNAPSHOT = 'ERR_NOT_BUILDING_SNAPSHOT',
  ERR_NO_CRYPTO = 'ERR_NO_CRYPTO',
  ERR_NO_ICU = 'ERR_NO_ICU',
  ERR_NO_LONGER_SUPPORTED = 'ERR_NO_LONGER_SUPPORTED',
  ERR_OPERATION_FAILED = 'ERR_OPERATION_FAILED',
  ERR_OUTOFMEMORY = 'ERR_OUTOFMEMORY',
  ERR_OUT_OF_RANGE = 'ERR_OUT_OF_RANGE',
  ERR_PACKAGE_IMPORT_NOT_DEFINED = 'ERR_PACKAGE_IMPORT_NOT_DEFINED',
  ERR_PACKAGE_PATH_NOT_EXPORTED = 'ERR_PACKAGE_PATH_NOT_EXPORTED',
  ERR_PARSE_ARGS_INVALID_OPTION_VALUE = 'ERR_PARSE_ARGS_INVALID_OPTION_VALUE',
  ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL = 'ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL',
  ERR_PARSE_ARGS_UNKNOWN_OPTION = 'ERR_PARSE_ARGS_UNKNOWN_OPTION',
  ERR_PARSE_HISTORY_DATA = 'ERR_PARSE_HISTORY_DATA',
  ERR_PERFORMANCE_INVALID_TIMESTAMP = 'ERR_PERFORMANCE_INVALID_TIMESTAMP',
  ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS = 'ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS',
  ERR_PROTO_ACCESS = 'ERR_PROTO_ACCESS',
  ERR_REQUIRE_ESM = 'ERR_REQUIRE_ESM',
  ERR_SCRIPT_EXECUTION_INTERRUPTED = 'ERR_SCRIPT_EXECUTION_INTERRUPTED',
  ERR_SCRIPT_EXECUTION_TIMEOUT = 'ERR_SCRIPT_EXECUTION_TIMEOUT',
  ERR_SERVER_ALREADY_LISTEN = 'ERR_SERVER_ALREADY_LISTEN',
  ERR_SERVER_NOT_RUNNING = 'ERR_SERVER_NOT_RUNNING',
  ERR_SOCKET_ALREADY_BOUND = 'ERR_SOCKET_ALREADY_BOUND',
  ERR_SOCKET_BAD_BUFFER_SIZE = 'ERR_SOCKET_BAD_BUFFER_SIZE',
  ERR_SOCKET_BAD_PORT = 'ERR_SOCKET_BAD_PORT',
  ERR_SOCKET_BAD_TYPE = 'ERR_SOCKET_BAD_TYPE',
  ERR_SOCKET_BUFFER_SIZE = 'ERR_SOCKET_BUFFER_SIZE',
  ERR_SOCKET_CANNOT_SEND = 'ERR_SOCKET_CANNOT_SEND',
  ERR_SOCKET_CLOSED = 'ERR_SOCKET_CLOSED',
  ERR_SOCKET_DGRAM_IS_CONNECTED = 'ERR_SOCKET_DGRAM_IS_CONNECTED',
  ERR_SOCKET_DGRAM_NOT_CONNECTED = 'ERR_SOCKET_DGRAM_NOT_CONNECTED',
  ERR_SOCKET_DGRAM_NOT_RUNNING = 'ERR_SOCKET_DGRAM_NOT_RUNNING',
  ERR_SRI_PARSE = 'ERR_SRI_PARSE',
  ERR_STDERR_CLOSE = 'ERR_STDERR_CLOSE',
  ERR_STDOUT_CLOSE = 'ERR_STDOUT_CLOSE',
  ERR_STREAM_ALREADY_FINISHED = 'ERR_STREAM_ALREADY_FINISHED',
  ERR_STREAM_CANNOT_PIPE = 'ERR_STREAM_CANNOT_PIPE',
  ERR_STREAM_DESTROYED = 'ERR_STREAM_DESTROYED',
  ERR_STREAM_NULL_VALUES = 'ERR_STREAM_NULL_VALUES',
  ERR_STREAM_PREMATURE_CLOSE = 'ERR_STREAM_PREMATURE_CLOSE',
  ERR_STREAM_PUSH_AFTER_EOF = 'ERR_STREAM_PUSH_AFTER_EOF',
  ERR_STREAM_READ_NOT_IMPLEMENTED = 'ERR_STREAM_READ_NOT_IMPLEMENTED',
  ERR_STREAM_UNSHIFT_AFTER_END_EVENT = 'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
  ERR_STREAM_WRAP = 'ERR_STREAM_WRAP',
  ERR_STREAM_WRITE_AFTER_END = 'ERR_STREAM_WRITE_AFTER_END',
  ERR_STRING_TOO_LONG = 'ERR_STRING_TOO_LONG',
  ERR_SYNTHETIC = 'ERR_SYNTHETIC',
  ERR_SYSTEM_ERROR = 'ERR_SYSTEM_ERROR',
  ERR_TAP_LEXER_ERROR = 'ERR_TAP_LEXER_ERROR',
  ERR_TAP_PARSER_ERROR = 'ERR_TAP_PARSER_ERROR',
  ERR_TAP_VALIDATION_ERROR = 'ERR_TAP_VALIDATION_ERROR',
  ERR_TEST_FAILURE = 'ERR_TEST_FAILURE',
  ERR_TLS_CERT_ALTNAME_FORMAT = 'ERR_TLS_CERT_ALTNAME_FORMAT',
  ERR_TLS_CERT_ALTNAME_INVALID = 'ERR_TLS_CERT_ALTNAME_INVALID',
  ERR_TLS_DH_PARAM_SIZE = 'ERR_TLS_DH_PARAM_SIZE',
  ERR_TLS_HANDSHAKE_TIMEOUT = 'ERR_TLS_HANDSHAKE_TIMEOUT',
  ERR_TLS_INVALID_CONTEXT = 'ERR_TLS_INVALID_CONTEXT',
  ERR_TLS_INVALID_PROTOCOL_METHOD = 'ERR_TLS_INVALID_PROTOCOL_METHOD',
  ERR_TLS_INVALID_PROTOCOL_VERSION = 'ERR_TLS_INVALID_PROTOCOL_VERSION',
  ERR_TLS_INVALID_STATE = 'ERR_TLS_INVALID_STATE',
  ERR_TLS_PROTOCOL_VERSION_CONFLICT = 'ERR_TLS_PROTOCOL_VERSION_CONFLICT',
  ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED = 'ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED',
  ERR_TLS_RENEGOTIATION_DISABLED = 'ERR_TLS_RENEGOTIATION_DISABLED',
  ERR_TLS_RENEGOTIATION_FAILED = 'ERR_TLS_RENEGOTIATION_FAILED',
  ERR_TLS_REQUIRED_SERVER_NAME = 'ERR_TLS_REQUIRED_SERVER_NAME',
  ERR_TLS_SESSION_ATTACK = 'ERR_TLS_SESSION_ATTACK',
  ERR_TLS_SNI_FROM_SERVER = 'ERR_TLS_SNI_FROM_SERVER',
  ERR_TRACE_EVENTS_CATEGORY_REQUIRED = 'ERR_TRACE_EVENTS_CATEGORY_REQUIRED',
  ERR_TRACE_EVENTS_UNAVAILABLE = 'ERR_TRACE_EVENTS_UNAVAILABLE',
  ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER = 'ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER',
  ERR_TRANSFORM_ALREADY_TRANSFORMING = 'ERR_TRANSFORM_ALREADY_TRANSFORMING',
  ERR_TRANSFORM_WITH_LENGTH_0 = 'ERR_TRANSFORM_WITH_LENGTH_0',
  ERR_TTY_INIT_FAILED = 'ERR_TTY_INIT_FAILED',
  ERR_UNAVAILABLE_DURING_EXIT = 'ERR_UNAVAILABLE_DURING_EXIT',
  ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET = 'ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET',
  ERR_UNESCAPED_CHARACTERS = 'ERR_UNESCAPED_CHARACTERS',
  ERR_UNHANDLED_ERROR = 'ERR_UNHANDLED_ERROR',
  ERR_UNKNOWN_BUILTIN_MODULE = 'ERR_UNKNOWN_BUILTIN_MODULE',
  ERR_UNKNOWN_CREDENTIAL = 'ERR_UNKNOWN_CREDENTIAL',
  ERR_UNKNOWN_ENCODING = 'ERR_UNKNOWN_ENCODING',
  ERR_UNKNOWN_FILE_EXTENSION = 'ERR_UNKNOWN_FILE_EXTENSION',
  ERR_UNKNOWN_MODULE_FORMAT = 'ERR_UNKNOWN_MODULE_FORMAT',
  ERR_UNKNOWN_SIGNAL = 'ERR_UNKNOWN_SIGNAL',
  ERR_UNKNOWN_STDIN_TYPE = 'ERR_UNKNOWN_STDIN_TYPE',
  ERR_UNKNOWN_STREAM_TYPE = 'ERR_UNKNOWN_STREAM_TYPE',
  ERR_UNSUPPORTED_DIR_IMPORT = 'ERR_UNSUPPORTED_DIR_IMPORT',
  ERR_UNSUPPORTED_ESM_URL_SCHEME = 'ERR_UNSUPPORTED_ESM_URL_SCHEME',
  ERR_USE_AFTER_CLOSE = 'ERR_USE_AFTER_CLOSE',
  ERR_V8BREAKITERATOR = 'ERR_V8BREAKITERATOR',
  ERR_VALID_PERFORMANCE_ENTRY_TYPE = 'ERR_VALID_PERFORMANCE_ENTRY_TYPE',
  ERR_VALUE_OUT_OF_RANGE = 'ERR_VALUE_OUT_OF_RANGE',
  ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING = 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING',
  ERR_VM_MODULE_ALREADY_LINKED = 'ERR_VM_MODULE_ALREADY_LINKED',
  ERR_VM_MODULE_CACHED_DATA_REJECTED = 'ERR_VM_MODULE_CACHED_DATA_REJECTED',
  ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA = 'ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA',
  ERR_VM_MODULE_DIFFERENT_CONTEXT = 'ERR_VM_MODULE_DIFFERENT_CONTEXT',
  ERR_VM_MODULE_LINKING_ERRORED = 'ERR_VM_MODULE_LINKING_ERRORED',
  ERR_VM_MODULE_LINK_FAILURE = 'ERR_VM_MODULE_LINK_FAILURE',
  ERR_VM_MODULE_NOT_LINKED = 'ERR_VM_MODULE_NOT_LINKED',
  ERR_VM_MODULE_NOT_MODULE = 'ERR_VM_MODULE_NOT_MODULE',
  ERR_VM_MODULE_STATUS = 'ERR_VM_MODULE_STATUS',
  ERR_WASI_ALREADY_STARTED = 'ERR_WASI_ALREADY_STARTED',
  ERR_WASI_NOT_STARTED = 'ERR_WASI_NOT_STARTED',
  ERR_WEBASSEMBLY_RESPONSE = 'ERR_WEBASSEMBLY_RESPONSE',
  ERR_WORKER_INIT_FAILED = 'ERR_WORKER_INIT_FAILED',
  ERR_WORKER_INVALID_EXEC_ARGV = 'ERR_WORKER_INVALID_EXEC_ARGV',
  ERR_WORKER_NOT_RUNNING = 'ERR_WORKER_NOT_RUNNING',
  ERR_WORKER_OUT_OF_MEMORY = 'ERR_WORKER_OUT_OF_MEMORY',
  ERR_WORKER_PATH = 'ERR_WORKER_PATH',
  ERR_WORKER_UNSERIALIZABLE_ERROR = 'ERR_WORKER_UNSERIALIZABLE_ERROR',
  ERR_WORKER_UNSUPPORTED_EXTENSION = 'ERR_WORKER_UNSUPPORTED_EXTENSION',
  ERR_WORKER_UNSUPPORTED_OPERATION = 'ERR_WORKER_UNSUPPORTED_OPERATION',
  ERR_ZLIB_BINDING_CLOSED = 'ERR_ZLIB_BINDING_CLOSED',
  ERR_ZLIB_INITIALIZATION_FAILED = 'ERR_ZLIB_INITIALIZATION_FAILED',
  HPE_HEADER_OVERFLOW = 'HPE_HEADER_OVERFLOW',
  HPE_UNEXPECTED_CONTENT_LENGTH = 'HPE_UNEXPECTED_CONTENT_LENGTH',
  MODULE_NOT_FOUND = 'MODULE_NOT_FOUND'
}

export default ErrorCode
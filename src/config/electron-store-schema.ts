/**
 * Schema is used in the main index.ts file when initializing electron-store
*/

export type T_EXPERIMENT_SETTINGS = {
    num_of_sessions: number
    num_of_char_sets: number
    num_of_signals: number
    num_of_distractors: number
    char_set_size: number
    char_set_duration_ms: number
    black_mask_duration_ms: number
    subject_id: string
}

export const ELECTRON_STORE_SCHEMA = {
    experiment_settings: {
        type: "object",
        properties: {
            num_of_sessions: {type: "number", default: 0},          // number of session in experiment
            num_of_char_sets: {type: "number", default: 0},         // number of char sets in session
            num_of_signals: {type: "number", default: 0},           // number of signals in session
            num_of_distractors: {type: "number", default: 0},       // number of distractors in session
            char_set_size: {type: "number", default: 0},            // number of characters in set - determines number of fill characters
            char_set_duration_ms: {type: "number", default: 0},     // duration of char set on screen in milliseconds
            black_mask_duration_ms: {type: "number", default: 0},   // duration of black mask - pause between changing dynamic characters

            subject_id: {type: "string", default: ""}               // subject's ID
        },
        default: {}
    }
} as const


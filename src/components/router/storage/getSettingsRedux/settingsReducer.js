import settingsTypes from './settingsTypes';

const initialState = {
    loading: false,
    error: false,
    settings: {
        wordsPerDay: 30,
        optional: {
            isShowImage: true,
            isShowTranslate: true,
            isShowTextMeaning: true,
            isShowTextExample: true,
            isShowTranscription: true,
            isShowAnswer: true,
            isShowDifficult: true,
            isShowDelete: true,
        },
    },
};

const settingsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case settingsTypes.FETCH_SETTINGS_PENDING:
            return { ...state, error: false, words: [], loading: true };
        case settingsTypes.FETCH_SETTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                settings: payload.settings,
            };
        case settingsTypes.FETCH_SETTINGS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export default settingsReducer;

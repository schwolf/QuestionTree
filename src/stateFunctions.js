/**
 * pure function (very similar to a redux reducer)
 * easiely testable!
 */
export function changeAntwort(state, frageId, antwort, callback) {

    const newState = Object.assign({}, state.fragen);

    newState.setAntwort(frageId, antwort);

    if (callback) {
        callback();
    }

    return newState;
}

export function extendFragenbaum(state, neueFrage, parentFrageId) {
    const newState = Object.assign({}, state.fragen)
    // todo: do not simply push new question. instead extend parent question (see parentFrageId)
    // newState.extendBaum(neueFrage, parentFrageId)
    newState.baum.push(neueFrage)
    return newState
}
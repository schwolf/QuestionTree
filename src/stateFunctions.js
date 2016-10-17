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

export function extendFragenbaum(state, neueFrage) {
    const newState = Object.assign({}, state.fragen)
    newState.baum.push(neueFrage)
    return newState;
}
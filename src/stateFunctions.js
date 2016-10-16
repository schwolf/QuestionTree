/**
 * pure function (very similar to a redux reducer)
 * easiely testable!
 */
export function changeAntwort(state, frageId, antwort) {

    const newState = Object.assign({}, state.fragen);

    newState.setAntwort(frageId, antwort);

    return newState;
}
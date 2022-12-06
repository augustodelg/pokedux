export const logger = (store) => (next) => (action) => {
    console.log('Action fired:', action);
    next(action);
};

export const featuring = (store) => (next) => (actionToEdit) => {
    const featured = [{ name: 'Taca' }, ...actionToEdit.action.pokemons];
    const updatedAction = {
        ...actionToEdit,
        action: {
            ...actionToEdit.action,
            pokemons: featured,
        }
    };
    next(updatedAction);
};


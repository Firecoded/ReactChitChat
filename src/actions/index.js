import types from './types';

export function updateChat(snapShot){
	return {
		type: types.UPDATE_CHAT_LOG,
		payload: snapShot.val()
	}
}
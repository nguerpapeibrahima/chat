
function getHighestId(state) {

  
  const messageId = state.messages.map((message) => message.id);
  const maxId = Math.max(...messageId);
  const id = maxId + 1;
  return id;

}
export default getHighestId;
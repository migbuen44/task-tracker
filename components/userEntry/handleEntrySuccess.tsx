interface UserInfo {
  id: number,
  name: string,
  email: string,
}

const handleEntrySuccess = (userInfo: UserInfo) => {
  localStorage.setItem('user', JSON.stringify(userInfo));
  window.location.href = '/';
}

export default handleEntrySuccess;
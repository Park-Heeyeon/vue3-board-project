import axios from 'axios';

export function getBoards() {
  return axios.get('http://localhost:3001/boards');
}

// id를 이용한 게시판 상세 데이터 조회
export function getBoardById(id) {
  return axios.get(`http://localhost:3001/boards/${id}`);
}

export function createBoard(data) {
  return axios.post('http://localhost:3001/boards', data);
}

export function updateBoard(id, data) {
  return axios.put(`http://localhost:3001/boards/${id}`, data);
}
export function deleteBoard(id) {
  return axios.delete(`http://localhost:3001/boards/${id}`);
}

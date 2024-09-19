import { boards } from '.';

export function getBoards(params) {
  return boards.get('', { params });
}

// id를 이용한 게시판 상세 데이터 조회
export function getBoardById(id) {
  return boards.get(id);
}

export function createBoard(data) {
  return boards.post('', data);
}

// put은 전체 내용을 수정 , patch는 수정한 일부 데이터만 수정
export function updateBoard(id, data) {
  return boards.patch(id, data);
}
export function deleteBoard(id) {
  return boards.delete(id);
}

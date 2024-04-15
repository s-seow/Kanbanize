import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

//kanban services
  getBoards() {
    return this.webReqService.get('boards');
  }

  getBoard(boardId: string) {
    return this.webReqService.get(`boards/${boardId}`);
  }

  getColumns(boardId: string) {
    return this.webReqService.get(`boards/${boardId}/columns`);
  }

  getColumn(boardId: string, columnId: string) {
    return this.webReqService.get(`boards/${boardId}/columns/${columnId}`);
  }

  createBoard(title: string) {
    // send a web request to create a list
    return this.webReqService.post('boards', { title });
  }

  createColumn(boardId:string, title: string, position: Number) {
    // send a web request to create a list
    return this.webReqService.post(`boards/${boardId}/columns`, { title, position });
  }

  getTaskCards(columnId: string) {
    return this.webReqService.get(`columns/${columnId}/taskcards`);
  }

  getTaskCard(columnId: string, taskcardId: string) {
    return this.webReqService.get(`columns/${columnId}/taskcards/${taskcardId}`);
  }

  createTaskCard(columnId:string, title: string, description: string, position: Number, date: Date) {
    return this.webReqService.post(`columns/${columnId}/taskcards`, { 
      title: title, 
      description: description,
      position: position,
      dueDate: date
    });
  }

  getComments(taskcardId: string) {
    return this.webReqService.get(`taskcards/${taskcardId}/comments`);
  }

  createComment(taskcardId: string, username: string, message: string, date: Date) {
    return this.webReqService.post(`taskcards/${taskcardId}/comments`, {
      username: username,
      message: message,
      date: date
    })
  }

  updateTaskCardDetails(columnId: string, taskcardId: string, title:string, description: string, date: Date) {
    return this.webReqService.patch(`columns/${columnId}/taskcards/${taskcardId}`, {
      title: title,
      description: description,
      dueDate: date
    })
  }
  
  updateTaskCardPriority(columnId: string, taskcardId: string, priority: Boolean) {
    return this.webReqService.patch(`columns/${columnId}/taskcards/${taskcardId}`, {
      priority: priority
    })
  }
  
  updateBoardTitle(boardId: string, title: string) {
    return this.webReqService.patch(`boards/${boardId}`, { title: title })
  }

  updateTaskCardPosition(columnId: string, taskcardId: string, newColumnId: string, position: Number) {
    return this.webReqService.patch(`columns/${columnId}/taskcards/${taskcardId}`, {
      _columnId: newColumnId,
      position: position
    })
  }

  deleteTaskCard(columnId: string, taskcardId: string) {
    return this.webReqService.delete(`columns/${columnId}/taskcards/${taskcardId}`)
  }

  deleteColumn(boardId: string, columnId: string) {
    return this.webReqService.delete(`boards/${boardId}/columns/${columnId}`)
  }

  deleteBoard(boardId: string) {
    return this.webReqService.delete(`boards/${boardId}`)
  }

  addUser(boardId:string, username: string) {
    return this.webReqService.post(`boards/${boardId}/add-user`, {
      username
    })
  }

  getUsers(boardId:string) {
    return this.webReqService.get(`boards/${boardId}/users`);
  }
}

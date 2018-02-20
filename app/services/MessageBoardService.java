package services;

import models.Message;

import com.google.inject.ImplementedBy;

import java.util.List;

@ImplementedBy(MessageBoardServiceImpl.class)
public interface MessageBoardService {
    void addNewMessage(Message message);
    List<Message> searchMessage(Message message);
    List<Message> retrieveAllMessage();
}
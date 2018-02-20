package services;

import models.Message;
import repositories.MessageRepository;

import play.db.jpa.Transactional;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Transactional
public class MessageBoardServiceImpl implements MessageBoardService {
    private final MessageRepository messageRepository;

    @Inject
    public MessageBoardServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public void addNewMessage(Message message) {
        message.setTimeCreated(new Date());
        messageRepository.save(message);
    }

    public List<Message> searchMessage(Message message) {
        return messageRepository.findLike(message);
    }

    public List<Message> retrieveAllMessage() {
        return messageRepository.findAll();
    }
}
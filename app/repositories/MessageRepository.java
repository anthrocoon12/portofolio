package repositories;

import models.Message;

import com.google.inject.ImplementedBy;

import java.util.List;

@ImplementedBy(MessageRepositoryImpl.class)
public interface MessageRepository {
    void save(Message message);
    List<Message> findLike(Message message);
    List<Message> findAll();
}
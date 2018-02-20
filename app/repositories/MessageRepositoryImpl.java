package repositories;

import models.Message;

import play.db.jpa.JPA;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Date;

public class MessageRepositoryImpl implements MessageRepository {
    private final JPAApi jpaApi;

    @Inject
    public MessageRepositoryImpl(JPAApi jpaApi) {
        this.jpaApi = jpaApi;
    }

    public void save(Message message) {
        EntityManager em = jpaApi.em();
        em.persist(message);
    }

    public List<Message> findLike(Message message) {
        EntityManager em = jpaApi.em();
        return em.createQuery("SELECT m FROM Message m " +
                            "WHERE LOWER(m.messageFrom) LIKE CONCAT('%',:messageFrom,'%') " +
                            "AND LOWER(m.messageTo) LIKE CONCAT('%',:messageTo,'%')" +
                            "AND LOWER(m.messageContent) LIKE CONCAT('%',:messageContent,'%')"
                            )
                .setParameter("messageFrom", message.getMessageFrom().toLowerCase())
                .setParameter("messageTo", message.getMessageTo().toLowerCase())
                .setParameter("messageContent", message.getMessageContent().toLowerCase())
                .getResultList();
    }

    public List<Message> findAll() {
        EntityManager em = jpaApi.em();
        return em.createQuery("SELECT m FROM Message m ORDER BY m.timeCreated DESC", Message.class).getResultList();
    }
}
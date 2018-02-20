package controllers;

import models.Message;
import services.MessageBoardService;

import play.mvc.Controller;
import play.mvc.Result;

import play.data.FormFactory;
import play.db.jpa.Transactional;

import javax.inject.Inject;
import java.util.List;

@Transactional
public class MessageBoardController extends Controller {
    private final FormFactory formFactory;
    private final MessageBoardService messageBoardService;

    @Inject
    public MessageBoardController(FormFactory formFactory, MessageBoardService messageBoardService) {
        this.formFactory = formFactory;
        this.messageBoardService = messageBoardService;
    }

    public Result messageBoardPage() {
        List<Message> messageList = messageBoardService.retrieveAllMessage();
        return ok(views.html.messageboard.render("No message yet!", "Messages", messageList));
    }

    public Result messageBoardAddNewMessage() {
        Message message = formFactory.form(Message.class).bindFromRequest().get();
        messageBoardService.addNewMessage(message);
        return redirect(routes.MessageBoardController.messageBoardPage());
    }

    public Result messageBoardSearchMessage() {
        Message message = formFactory.form(Message.class).bindFromRequest().get();
        List<Message> searchResult = messageBoardService.searchMessage(message);
        return ok(views.html.messageboard.render("No message found!", "Search Result", searchResult));
    }
}
package gom.sleep.cave.project.board.service;

import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getComment(long id) {
        return commentRepository.findByMemberId(id);
    }

}

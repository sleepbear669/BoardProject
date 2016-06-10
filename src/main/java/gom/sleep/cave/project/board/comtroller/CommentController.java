package gom.sleep.cave.project.board.comtroller;

import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@RestController
@RequestMapping("/api")
@CrossOrigin
@SessionAttributes("member")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "comments/{id}", method = GET)
    public ResponseEntity<?> fetchComments(@PathVariable("id") Long id) {
        final List<Comment> comment = commentService.getComment(id);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
    @RequestMapping(value = "comments", method = GET)
    public ResponseEntity<?> fetchComments() {
        final List<Comment> comment = commentService.getComment();
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @RequestMapping(value = "comments/{memberId}", method = POST)
    public ResponseEntity<?> writeComment(Comment comment, @PathVariable("memberId") long memberId) {
        final Member member = new Member();
        member.setId(memberId);
        comment.setMember(member);
        Comment addedComment = commentService.add(comment);
        return new ResponseEntity<>(addedComment, HttpStatus.OK);
    }
}

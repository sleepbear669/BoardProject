package gom.sleep.cave.project.board.comtroller;

import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@RestController
@RequestMapping("/api")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "comments/{id}", method = GET)
    public ResponseEntity<?> fetchComment(@PathVariable("id") Long id) {
        final List<Comment> comment = commentService.getComment(id);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
    @RequestMapping(value = "comments", method = GET)
    public ResponseEntity<?> fetchComment() {
        final List<Comment> comment = commentService.getComment();
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
}

package gom.sleep.cave.project.board.comtroller;

import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.model.CommentDto;
import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.domain.Sort.Direction;
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
        final List<Comment> responses = commentService.getComment(id);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }
    @RequestMapping(value = "comments", method = GET)
    public HttpEntity<?> fetchComments(
            @PageableDefault(sort = { "registeredDate" }, direction = Direction.DESC, size = 7)Pageable pageable,
            PagedResourcesAssembler assembler) {
        final Page<CommentDto.Response> responses = commentService.getComment(pageable);
        return new ResponseEntity<>(assembler.toResource(responses), HttpStatus.OK);
    }

    @RequestMapping(value = "comments/{memberId}", method = POST)
    public ResponseEntity<?> writeComment(@RequestBody Comment comment, @PathVariable("memberId") long memberId) {
        final Member member = new Member();
        member.setId(memberId);
        comment.setMember(member);
        Comment addedComment = commentService.add(comment);
        return new ResponseEntity<>(addedComment, HttpStatus.OK);
    }

    @RequestMapping(value = "comments/{commentId}/member/{memberId}")
    public ResponseEntity<?> removeComment(Member member, @PathVariable("commentId") long commentId, @PathVariable("memberId") long memberId){
        commentService.remove(commentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

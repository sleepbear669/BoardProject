package gom.sleep.cave.project.board.repository;

import gom.sleep.cave.project.board.Application;
import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.model.Member;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

/**
 * Created by sleepbear on 2016. 6. 1..
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
public class CommentRepositoryTest {

    @Autowired
    private CommentRepository commentRepository;

    @Test
    public void testAdd() throws Exception {
        // Given
        final String content = "곰은 곰곰하고 웁니다.";
        final long id = 1;

        final Member member = new Member();
        member.setId(id);

        final Comment comment = new Comment();
        comment.setContent(content);
        comment.setMember(member);
        // When
        final Comment savedComment = commentRepository.save(comment);
        // Then
        assertThat(savedComment.getMember().getId(), is(id));
        assertThat(savedComment.getContent(), is(content));
    }

    @Test
    public void testFindById() throws Exception {
        // Given
        final long memberId = 2;
        final List<Comment> all = commentRepository.findByMemberId(memberId);
        // When

        // Then
        assertThat(all.size(), is(1));
    }
}
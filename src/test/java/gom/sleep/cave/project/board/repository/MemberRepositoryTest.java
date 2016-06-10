package gom.sleep.cave.project.board.repository;

import gom.sleep.cave.project.board.Application;
import gom.sleep.cave.project.board.model.Member;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

/**
 * Created by sleepbear on 2016. 6. 1..
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
public class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void testMemberGet() throws Exception {
        // Given
        final long id = 1;
        final String accountName = "sleepbear669";
        final String name = "잠자는곰";
        final String password = "gom0119!1";

        final Member fetchMember = memberRepository.findById(1);
        // When

        // Then
        assertThat(fetchMember.getId(), is(id));
        assertThat(fetchMember.getAccountName(), is(accountName));
        assertThat(fetchMember.getName(), is(name));
        assertThat(fetchMember.getPassword(), is(password));

    }
}
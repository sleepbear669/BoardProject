package gom.sleep.cave.project.board.comtroller;

import gom.sleep.cave.project.board.Application;
import gom.sleep.cave.project.board.model.Member;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by sleepbear on 2016. 6. 6..
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@Transactional
public class MemberControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(webApplicationContext)
                .build();
    }

    @Test
    public void testSignUp() throws Exception {
        // Given

        final Member member = new Member();
        member.setAccountName("testMemberId");
        member.setPassword("testPassword");
        member.setName("testName");
        member.setDescription("testDescription");

        // When
        final ResultActions result = mockMvc.perform(post("/api/signUp")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .param("accountName", "testAccountName")
                .param("password", "testPassword")
                .param("name", "testName")
                .param("description", "testDescription"));

        // Then
        result.andDo(print());
        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.accountName", is("testAccountName")));
    }
}
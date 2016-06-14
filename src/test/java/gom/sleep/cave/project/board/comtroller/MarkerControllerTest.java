package gom.sleep.cave.project.board.comtroller;

import com.fasterxml.jackson.databind.ObjectMapper;
import gom.sleep.cave.project.board.Application;
import gom.sleep.cave.project.board.model.Marker;
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
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by sleepbear on 2016. 6. 15..
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class MarkerControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private ObjectMapper objectMapper;

    MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(webApplicationContext)
                .build();
    }

    @Test
    public void testMarking() throws Exception {
        // Given
        final Marker marker = new Marker();
        marker.setMarkerType("RECOMMEND");
        marker.setCommentId(1);
        marker.setMemberId(1);

        // When
        final ResultActions resultActions = mockMvc.perform(post("/api/markers")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(marker)));

        // Then
        resultActions.andDo(print());
        resultActions.andExpect(status().isOk());
    }
}
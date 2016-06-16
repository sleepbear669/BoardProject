package gom.sleep.cave.project.board.model;

import lombok.Data;

import java.util.Map;

/**
 * Created by sleepbear on 2016. 6. 10..
 */
public class CommentDto {

    @Data
    public static class Response{

        private Comment comment;

        private Map<Marker.MarkerType, Long> markerCount;
    }

}

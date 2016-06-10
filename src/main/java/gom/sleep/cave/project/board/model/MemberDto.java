package gom.sleep.cave.project.board.model;

import lombok.Data;

/**
 * Created by sleepbear on 2016. 6. 10..
 */
public class MemberDto {

    @Data
    public static class Login {
        private String accountName;
        private String password;
    }

    @Data
    public static class Create {

        private String accountName;

        private String password;

        private String name;

        private String description;

        private String profileImage;
    }
}

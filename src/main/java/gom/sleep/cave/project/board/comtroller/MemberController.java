package gom.sleep.cave.project.board.comtroller;


import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;

/**
 * Created by sleepbear on 2016. 6. 4..
 */

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MemberController {

    @Autowired
    private MemberService memberService;

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public ResponseEntity<?> signUp(Member member, @RequestParam(value = "upload", required = false)MultipartFile upload) throws IOException {
        String fileName = null;
        if (upload != null) {
            fileName = upload.getOriginalFilename();
            String fileDirectory = "src/main/webapp/static/image";
            String filePath = Paths.get(fileDirectory, fileName).toString();
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(
                    new FileOutputStream(new File(filePath)));
            bufferedOutputStream.write(upload.getBytes());
            bufferedOutputStream.close();
        } else {
            fileName = "simple_profile.jpeg";
        }
        member.setProfileImage(fileName);
        final Member addedMember = memberService.addMember(member);
        return new ResponseEntity<>(addedMember, HttpStatus.OK);
    }
}


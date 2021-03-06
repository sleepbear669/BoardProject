package gom.sleep.cave.project.board.comtroller;


import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.model.MemberDto;
import gom.sleep.cave.project.board.service.MemberService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
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
@SessionAttributes("member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public ResponseEntity<?> signUp(MemberDto.Create create, @RequestParam(value = "upload", required = false)MultipartFile upload) throws IOException {
        String fileName;
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
        create.setProfileImage(fileName);
        final Member member = modelMapper.map(create, Member.class);
        final Member addedMember = memberService.addMember(member);
        return new ResponseEntity<>(addedMember, HttpStatus.OK);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public ResponseEntity<?> edit(MemberDto.Edit edit, @RequestParam(value = "upload", required = false)MultipartFile upload) throws IOException {
        if (upload != null) {
            String fileName = upload.getOriginalFilename();
            String fileDirectory = "src/main/webapp/static/image";
            String filePath = Paths.get(fileDirectory, fileName).toString();
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(
                    new FileOutputStream(new File(filePath)));
            bufferedOutputStream.write(upload.getBytes());
            bufferedOutputStream.close();
            edit.setProfileImage(fileName);
        }
        final Member member = modelMapper.map(edit, Member.class);
        final Member editMember = memberService.edit(member);
        return new ResponseEntity<>(editMember, HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.PUT)
    public ResponseEntity<?> login(HttpSession httpSession , @RequestBody MemberDto.Login login ){
        Member member = memberService.login(login);
        httpSession.setAttribute("member", member);
        if (member != null) {
            return new ResponseEntity<>(member, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}


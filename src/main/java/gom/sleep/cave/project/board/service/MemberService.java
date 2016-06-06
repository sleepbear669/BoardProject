package gom.sleep.cave.project.board.service;

import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by sleepbear on 2016. 6. 6..
 */
@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

}

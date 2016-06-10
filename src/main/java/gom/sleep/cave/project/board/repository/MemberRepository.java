package gom.sleep.cave.project.board.repository;

import gom.sleep.cave.project.board.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{
    Member findById(long i);

    Member findByAccountName(String accountId);
}

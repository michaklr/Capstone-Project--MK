package de.michaklr.backend.repository;

import de.michaklr.backend.model.SurveyItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface SurveyItemRepository extends PagingAndSortingRepository<SurveyItem,String> {

    List<SurveyItem> findAll();

    SurveyItem findByQuestionNumber(String questionNumber);

}

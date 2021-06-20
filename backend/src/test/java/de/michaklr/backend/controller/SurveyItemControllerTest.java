package de.michaklr.backend.controller;

import de.michaklr.backend.model.SurveyItem;
import de.michaklr.backend.repository.SurveyItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SurveyItemControllerTest {

    @LocalServerPort
    private int port;


    @Autowired
    private SurveyItemRepository repository;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getSurveyItemsShouldReturnItemsFromDb(){
        // GIVEN
        repository.save(new SurveyItem("Hallo?","1"));
        repository.save(new SurveyItem("Wie gehts?","2"));

        // WHEN
        ResponseEntity<SurveyItem[]> response = restTemplate.getForEntity("http://localhost:"+port+"/api/survey", SurveyItem[].class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(new SurveyItem("Hallo?","1"),(new SurveyItem("Wie gehts?","2"))));
    }


}
package de.michaklr.backend.service;
import de.michaklr.backend.Dto.ResultsDto;
import de.michaklr.backend.model.Therapist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import java.util.List;

@Service
public class TherapistApiService {

    @Value("${google.api.key}")
    private String googleApiKey;



    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    public TherapistApiService() {
    }

    public List<Therapist> loadTherapists() {

        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", googleApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String jsonPlaceholderUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=2000&location=50.935173,6.953101&type=doctor&name=psychotherapist&key=" + googleApiKey;
        ResponseEntity<ResultsDto> response = restTemplate.exchange(jsonPlaceholderUrl, HttpMethod.GET, entity, ResultsDto.class);

        try {
            System.out.println(response);
        } catch (Exception e) {
            throw new RuntimeException("Json deserialization failed.");
        }
        System.out.println(response.getBody());
        return response.getBody().getResults();

    }
}

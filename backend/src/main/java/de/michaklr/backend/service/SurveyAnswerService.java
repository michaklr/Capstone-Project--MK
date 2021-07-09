package de.michaklr.backend.service;

import de.michaklr.backend.Dto.AnswersDto;
import de.michaklr.backend.Dto.ResultAnswers;
import org.springframework.stereotype.Service;

@Service
public class SurveyAnswerService {

    public ResultAnswers evaluateAnswers(AnswersDto answersDto) {

        int depressionsLevel = 0;
        int angstLevel= 0;
        int zwangLevel = 0;
        int somaLevel= 0;
        int essVerhaltenLevel = 0;


        ResultAnswers results = new ResultAnswers();


        if (answersDto.getAnswer_0().equals("Trifft nicht zu")) {
            depressionsLevel += 0;
        }
        if (answersDto.getAnswer_0().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_0().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_0().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_0().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_1().equals("Trifft nicht zu")) {
            depressionsLevel += 0;
        }
        if (answersDto.getAnswer_1().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_1().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_1().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_1().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_2().equals("Trifft nicht zu")) {
            depressionsLevel += 0;
        }
        if (answersDto.getAnswer_2().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_2().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_2().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_2().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_3().equals("Trifft nicht zu")) {
            depressionsLevel += 0;
        }
        if (answersDto.getAnswer_3().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_3().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_3().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_3().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }

        int depressionsScore = depressionsLevel/4;
        if (depressionsScore <= 0.75){
           results.setDepressionResult("Es liegt ein Verdacht vor");
        } else if (depressionsScore > 0.75 && depressionsScore <= 1){
            results.setDepressionResult("Es liegen nur geringe Symptome vor.");
        } else if (depressionsScore > 1 && depressionsScore <= 2){
            results.setDepressionResult( "Es liegen verstärkte Symptome vor.");
        }else if (depressionsScore > 2 && depressionsScore <= 3){
            results.setDepressionResult( "Depression: Es liegen schwere Symptome vor.");
        }



        if (answersDto.getAnswer_4().equals("Trifft nicht zu")) {
            angstLevel += 0;
        }
        if (answersDto.getAnswer_4().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_4().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_4().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_4().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }

        if (answersDto.getAnswer_5().equals("Trifft nicht zu")) {
            angstLevel += 0;
        }
        if (answersDto.getAnswer_5().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_5().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_5().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_5().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }

        if (answersDto.getAnswer_6().equals("Trifft nicht zu")) {
            angstLevel += 0;
        }
        if (answersDto.getAnswer_6().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_6().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_6().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_6().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }

        if (answersDto.getAnswer_7().equals("Trifft nicht zu")) {
            angstLevel += 0;
        }
        if (answersDto.getAnswer_7().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_7().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_7().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_7().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }


        int angstScore = angstLevel/4;

        if (angstScore <= 0.75){
            results.setAngstResult("Es liegt ein Verdacht vor.");
        } else if (angstScore > 0.75 && angstScore <= 1){
            results.setAngstResult( "Es liegt nur geringe Symptome vor.");
        } else if (angstScore > 1 && angstScore <= 2){
            results.setAngstResult( "Es liegen verstärkte Symptome vor.");
        }else if (angstScore > 2 && angstScore <= 3){
            results.setAngstResult( "Es liegen schwere Symptome vor.");
        }




        if (answersDto.getAnswer_8().equals("Trifft nicht zu")) {
            zwangLevel += 0;
        }
        if (answersDto.getAnswer_8().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_8().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_8().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_8().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }


        if (answersDto.getAnswer_9().equals("Trifft nicht zu")) {
            zwangLevel += 0;
        }
        if (answersDto.getAnswer_9().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_9().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_9().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_9().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }


        if (answersDto.getAnswer_10().equals("Trifft nicht zu")) {
            zwangLevel += 0;
        }
        if (answersDto.getAnswer_10().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_10().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_10().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_10().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }

        int zwangScore = zwangLevel/3;
        if (zwangScore <= 0.67){
            results.setZwangResult("Es liegt ein Verdacht vor.");
        } else if (zwangScore > 0.67 && zwangScore <= 1.0){
            results.setZwangResult( "Es liegen nur geringe Symptome vor.");
        } else if (zwangScore > 1.0 && zwangScore <= 2.0){
            results.setZwangResult( "Es liegen verstärkte Symptome vor.");
        }else if (zwangScore > 2.0 && zwangScore <= 3.0){
            results.setZwangResult( "Es liegen schwere Symptome vor.");
        }





        if (answersDto.getAnswer_11().equals("Trifft nicht zu")) {
            somaLevel += 0;
        }
        if (answersDto.getAnswer_11().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_11().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_11().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_11().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }


        if (answersDto.getAnswer_12().equals("Trifft nicht zu")) {
            somaLevel += 0;
        }
        if (answersDto.getAnswer_12().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_12().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_12().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_12().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }


        if (answersDto.getAnswer_13().equals("Trifft nicht zu")) {
            somaLevel += 0;
        }
        if (answersDto.getAnswer_13().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_13().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_13().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_13().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }

        int somaScore = somaLevel/3;

        if (somaScore <= 0.33){
            results.setSomaResult("Es liegt ein Verdacht vor.");
        } else if (somaScore > 0.33 && somaScore <= 0.75){
            results.setSomaResult( "Es liegen nur geringe Symptome vor.");
        } else if (somaScore > 0.75 && somaScore <= 1.25){
            results.setSomaResult( "Es liegen verstärkte Symptome vor.");
        }else if (somaScore > 1.25 && somaScore <= 2.67){
           results.setSomaResult( "Es liegen schwere Symptome vor.");
        }






        if (answersDto.getAnswer_14().equals("Trifft nicht zu")) {

            essVerhaltenLevel += 0;
        }
        if (answersDto.getAnswer_14().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_14().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_14().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_14().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }


        if (answersDto.getAnswer_15().equals("Trifft nicht zu")) {
            essVerhaltenLevel += 0;
        }
        if (answersDto.getAnswer_15().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_15().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_15().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_15().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }


        if (answersDto.getAnswer_16().equals("Trifft nicht zu")) {
            essVerhaltenLevel += 0;
        }
        if (answersDto.getAnswer_16().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_16().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_16().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_16().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }

        int essStörungScore = essVerhaltenLevel/4;

        if (essStörungScore <= 0.33){
            results.setEssVerhaltenResult("Es liegt ein Verdacht vor.");
        } else if (essStörungScore > 0.33 && essStörungScore <= 0.67){
            results.setEssVerhaltenResult( "Es liegen nur geringe Symptome vor.");
        } else if (essStörungScore > 0.67 && essStörungScore <= 1.5){
            results.setEssVerhaltenResult( "Es liegen verstärkte Symptome vor.");
        }else if (essStörungScore > 1.5 && essStörungScore <= 2.75){
            results.setEssVerhaltenResult( "Es liegen schwere Symptome vor.");
        }



       boolean[] zusatzFragen = {false,false,false,false,false,false,false,false,false,false,false,false,};

        int zusatzLevel = 0;

        if (answersDto.getAnswer_17().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
        }

        if (answersDto.getAnswer_17().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[0]= true;
        }
        if (answersDto.getAnswer_17().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[0]= true;
        }
        if (answersDto.getAnswer_17().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[0]= true;
        }
        if (answersDto.getAnswer_17().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[0]= true;
        }


        if (answersDto.getAnswer_18().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[1]= true;

        }
        if (answersDto.getAnswer_18().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[1]= true;
        }
        if (answersDto.getAnswer_18().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[1]= true;
        }
        if (answersDto.getAnswer_18().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[1]= true;
        }
        if (answersDto.getAnswer_18().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[1]= true;
        }


        if (answersDto.getAnswer_19().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[2]= true;
        }
        if (answersDto.getAnswer_19().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[2]= true;
        }
        if (answersDto.getAnswer_19().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[2]= true;
        }
        if (answersDto.getAnswer_19().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[2]= true;
        }
        if (answersDto.getAnswer_19().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[2]= true;
        }


        if (answersDto.getAnswer_20().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[3]= true;
        }
        if (answersDto.getAnswer_20().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[3]= true;
        }
        if (answersDto.getAnswer_20().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[3]= true;
        }
        if (answersDto.getAnswer_20().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[3]= true;
        }
        if (answersDto.getAnswer_20().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[3]= true;
        }


        if (answersDto.getAnswer_21().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[4]= true;
        }
        if (answersDto.getAnswer_21().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[4]= true;
        }
        if (answersDto.getAnswer_21().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[4]= true;
        }
        if (answersDto.getAnswer_21().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[4]= true;
        }
        if (answersDto.getAnswer_21().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[4]= true;
        }


        if (answersDto.getAnswer_22().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[5]= true;
        }
        if (answersDto.getAnswer_22().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[5]= true;
        }
        if (answersDto.getAnswer_22().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[5]= true;
        }
        if (answersDto.getAnswer_22().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[5]= true;
        }
        if (answersDto.getAnswer_22().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[5]= true;
        }


        if (answersDto.getAnswer_23().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[6]= true;
        }
        if (answersDto.getAnswer_23().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[6]= true;
        }
        if (answersDto.getAnswer_23().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[6]= true;
        }
        if (answersDto.getAnswer_23().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[6]= true;
        }
        if (answersDto.getAnswer_23().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[6]= true;
        }


        if (answersDto.getAnswer_24().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[7]= true;
        }
        if (answersDto.getAnswer_24().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[7]= true;
        }
        if (answersDto.getAnswer_24().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[7]= true;
        }
        if (answersDto.getAnswer_24().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[7]= true;
        }
        if (answersDto.getAnswer_24().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[7]= true;
        }

        if (answersDto.getAnswer_25().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[8]= true;
        }
        if (answersDto.getAnswer_25().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[8]= true;
        }
        if (answersDto.getAnswer_25().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[8]= true;
        }
        if (answersDto.getAnswer_25().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[8]= true;
        }
        if (answersDto.getAnswer_25().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[8]= true;
        }

        if (answersDto.getAnswer_26().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[9]= true;
        }
        if (answersDto.getAnswer_26().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[9]= true;
        }
        if (answersDto.getAnswer_26().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[9]= true;
        }
        if (answersDto.getAnswer_26().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[9]= true;
        }
        if (answersDto.getAnswer_26().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[9]= true;
        }


        if (answersDto.getAnswer_27().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[10]= true;
        }
        if (answersDto.getAnswer_27().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[10]= true;
        }
        if (answersDto.getAnswer_27().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[10]= true;
        }
        if (answersDto.getAnswer_27().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[10]= true;
        }
        if (answersDto.getAnswer_27().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[10]= true;
        }

        if (answersDto.getAnswer_28().equals("Trifft nicht zu")) {
            zusatzLevel += 0;
            zusatzFragen[11]= true;
        }
        if (answersDto.getAnswer_28().equals("Trifft kaum zu")) {
            zusatzLevel += 1;
            zusatzFragen[11]= true;
        }
        if (answersDto.getAnswer_28().equals("Trifft ziemlich zu")) {
            zusatzLevel += 2;
            zusatzFragen[11]= true;
        }
        if (answersDto.getAnswer_28().equals("Trifft deutlich zu")) {
            zusatzLevel += 3;
            zusatzFragen[11]= true;
        }
        if (answersDto.getAnswer_28().equals("Trifft extrem zu")) {
            zusatzLevel += 4;
            zusatzFragen[11]= true;
        }

        int zusatzScore= zusatzLevel/12;
        if (zusatzScore > 1){
            results.setZusatzResult(" Es liegt eine Tendenz in eine der Zusatzfragen vor.");
        }


        int gesamtScore = depressionsScore + angstScore + zwangScore + somaScore + essStörungScore + zusatzScore + zusatzScore/ 7;

        if (gesamtScore <= 0.5){
            results.setGesamtResult("Es liegt ein Verdacht vor.");
        } else if (essStörungScore > 0.5 && essStörungScore <= 0.6){
            results.setGesamtResult( "Es liegen nur geringe Symptome vor.");
        } else if (essStörungScore > 0.6 && essStörungScore <= 0.9){
            results.setGesamtResult( "Es liegen verstärkte Symptome vor.");
        }else if (essStörungScore > 0.9 && essStörungScore <= 1.7){
            results.setGesamtResult( "Es liegen schwere Symptome vor.");
        }

        return results;
    }
}

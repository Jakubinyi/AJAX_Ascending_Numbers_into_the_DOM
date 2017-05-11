package servlet;

import java.util.Random;

/**
 * Created by jakubinyi on 2017.05.11..
 */
public class ServletService {

    public String getRandomNumberInJson() {

        Random rand = new Random();
        int randomNumber = rand.nextInt(100) + 1;

        String s = "{ " +
            "\"randomNumber\":" + randomNumber +
            "}";

        return s;
    }
}

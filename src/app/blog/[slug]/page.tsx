package com.helloworld;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;

public class MyTaskService extends HeadlessJsTaskService {
    @Override
    protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras != null) {
            return new HeadlessJsTaskConfig(
                "TaxiCourseTask", // Doit correspondre exactement au nom dans App.js
                Arguments.fromBundle(extras),
                5000, // Timeout de 5 secondes
                true  // Autorise l'exécution même si l'app est au premier plan
            );
        }
        return null;
    }
}
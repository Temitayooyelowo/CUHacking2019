package com.comp1601.git_analyzer;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.anychart.AnyChart;
import com.anychart.AnyChartView;
import com.anychart.chart.common.dataentry.DataEntry;
import com.anychart.chart.common.dataentry.ValueDataEntry;
import com.anychart.charts.Pie;

import java.util.ArrayList;
import java.util.List;


public class MainActivity extends AppCompatActivity {

    AnyChartView firstView;
    AnyChartView secondView;
    AnyChartView thirdView;
    AnyChartView fourthView;

    Pie pie;

    Button searchButton;
    EditText searchBar;

    TextView numOfCommits;
    TextView numOfPulls;
    TextView numOfRepos;





    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide();


        firstView = (AnyChartView) findViewById(R.id.first_graph);


        pie = AnyChart.pie();

        List<DataEntry> data = new ArrayList<>();
        data.add(new ValueDataEntry("John", 10000));
        data.add(new ValueDataEntry("Jake", 12000));
        data.add(new ValueDataEntry("Peter", 18000));

        pie.data(data);


        firstView.setChart(pie);
    }


}

package com.example.vehiclehealth

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class StatusActivity : AppCompatActivity() {
    private lateinit var vehicleNumberStatusEditText: EditText
    private lateinit var statusSubmitButton: Button
    private lateinit var statusTextView: TextView
    private lateinit var queue: RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_status)

        vehicleNumberStatusEditText = findViewById(R.id.vehicleNumberStatusEditText)
        statusSubmitButton = findViewById(R.id.statusSubmitButton)
        statusTextView = findViewById(R.id.statusTextView)
        queue = Volley.newRequestQueue(this)

        statusSubmitButton.setOnClickListener {
            val vehicleNumber = vehicleNumberStatusEditText.text.toString()


            val url = "https://kotlinproject.onrender.com/api/vehicle/status?vehicleNumber=$vehicleNumber"

            val stringRequest = StringRequest(Request.Method.GET, url,
                { response ->
                    val jsonObject = JSONObject(response)
                    val healthCondition = jsonObject.getString("healthCondition")
                    val statusMessage = jsonObject.getString("statusMessage")
                    statusTextView.text = "Status: $healthCondition - $statusMessage"
                },
                { error ->
                    Toast.makeText(this, "Failed to fetch status", Toast.LENGTH_SHORT).show()
                })

            queue.add(stringRequest)
        }
    }
}
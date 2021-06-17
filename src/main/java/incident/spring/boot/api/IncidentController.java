/*
 * Copyright © 2017 IBM Corp. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

package incident.spring.boot.api;

import com.cloudant.client.api.Database;
import com.cloudant.client.api.model.Response;
import incident.spring.boot.model.Incident;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/incidents")
public class IncidentController {

    @Autowired
    private Database db;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<Incident> getAll() throws IOException {
        List<Incident> allDocs = db.getAllDocsRequestBuilder().includeDocs(true).build().getResponse().getDocsAs(Incident.class);
        return allDocs;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public @ResponseBody
    Incident getIncident(@PathVariable String id) throws IOException {
        Incident Incident = db.find(Incident.class, id);
        return Incident;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    String add(@RequestBody Incident Incident) {
        Response response = db.post(Incident);
        String id = response.getId();
        return id;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<?> deleteIncident(@PathVariable String id) throws IOException {
        Incident Incident = db.find(Incident.class, id);
        Response remove = db.remove(Incident.getId());
        return new ResponseEntity<String>(remove.getReason(), HttpStatus.valueOf(remove.getStatusCode()));
    }
}